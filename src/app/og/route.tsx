import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get query parameters
    const title = searchParams.get("title") || "Swastideep Maharana";
    const stack = searchParams.get("stack") || "";
    const stackArray = stack ? stack.split(",").map((s) => s.trim()) : [];

    // Using system fonts for better compatibility

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #050505 0%, #1a1a2e 100%)",
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          {/* Background Gradient Orbs */}
          <div
            style={{
              position: "absolute",
              top: -200,
              left: -200,
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -200,
              right: -200,
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px 60px",
              zIndex: 1,
            }}
          >
            {/* Logo/Name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontWeight: 900,
                  color: "white",
                }}
              >
                SM
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Swastideep Maharana
              </div>
            </div>

            {/* Project Title */}
            <div
              style={{
                fontSize: title.length > 30 ? 64 : 72,
                fontWeight: 900,
                color: "#ffffff",
                textAlign: "center",
                marginBottom: 40,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                maxWidth: 1000,
              }}
            >
              {title}
            </div>

            {/* Tech Stack */}
            {stackArray.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  justifyContent: "center",
                  maxWidth: 800,
                }}
              >
                {stackArray.slice(0, 6).map((tech, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "12px 24px",
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#ffffff",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

