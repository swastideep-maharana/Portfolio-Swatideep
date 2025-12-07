// Fallback rate limiter using in-memory storage (for development)
// This is a simple implementation that works without Upstash
class InMemoryRateLimit {
  private requests: Map<string, number[]> = new Map();

  async limit(identifier: string): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const key = identifier;

    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }

    const timestamps = this.requests.get(key)!;
    
    // Remove timestamps older than 1 hour
    const recentTimestamps = timestamps.filter((ts) => now - ts < oneHour);

    if (recentTimestamps.length >= 2) {
      const oldestTimestamp = Math.min(...recentTimestamps);
      const reset = oldestTimestamp + oneHour;
      return {
        success: false,
        limit: 2,
        remaining: 0,
        reset: Math.ceil((reset - now) / 1000),
      };
    }

    recentTimestamps.push(now);
    this.requests.set(key, recentTimestamps);

    return {
      success: true,
      limit: 2,
      remaining: 2 - recentTimestamps.length,
      reset: Math.ceil(oneHour / 1000),
    };
  }
}

// Use Upstash if available, otherwise fallback to in-memory
function createRateLimiter() {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const { Ratelimit } = require("@upstash/ratelimit");
      const { Redis } = require("@upstash/redis");
      
      return new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(2, "1 h"),
        analytics: true,
        prefix: "@upstash/ratelimit",
      });
    } catch (error) {
      console.warn("Failed to initialize Upstash rate limiter, using in-memory fallback:", error);
      return new InMemoryRateLimit();
    }
  }
  return new InMemoryRateLimit();
}

export const rateLimiter = createRateLimiter();

