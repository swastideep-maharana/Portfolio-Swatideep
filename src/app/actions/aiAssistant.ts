"use server";

export async function askAiAssistant(messages: { role: string; content: string }[]) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not defined");
  }

  const systemPrompt = `
    You are "Swastideep's Assistant," a helpful and professional AI representative for Swastideep Maharana's portfolio.
    Your goal is to answer questions about Swastideep's experience, skills, and projects based on the following information:

    NAME: Swastideep Maharana
    ROLE: Full Stack & Frontend Developer
    LOCATION: India (Never share specific address)
    
    CORE SKILLS:
    - Frontend: HTML, CSS, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, Framer Motion.
    - State Management: Zustand, Context API, Redux/RTK.
    - Backend: Node.js, Express.js, tRPC.
    - Databases: MongoDB, PostgreSQL (Prisma), Appwrite, Firebase, Convex.
    - APIs & Integrations: REST APIs, OpenAI API, Google Gemini API, RTK Query.
    - Tools: Git, GitHub, Docker, AWS S3, Vercel, Netlify.

    WORK EXPERIENCE:
    - Vois AI (Dubai) | FullStack Developer | Present: Building core AI agent modules, refactoring global routing, implementing organization systems, and optimizing API-driven UI logic using React and TypeScript.
    - AIM ARENA (Delhi) | Junior FullStack Developer | Jan 2024 – Feb 2025: Built responsive web apps, integrated REST APIs with Node/Express, and managed player data with MongoDB.

    KEY PROJECTS:
    - Resonance: AI Voice Cloning & TTS Platform (Next.js 16, tRPC, PostgreSQL, Clerk, AWS S3).
    - Pixxel-AI: Full-Stack AI Image Editor (Next.js, Fabric.js, Convex, ImageKit).
    - UrbanTwin: 3D Smart City Simulation (Mapbox GL, Gemini AI).

    EDUCATION:
    - B.Tech in Computer Science and Engineering | Adarsha College of Engineering | GPA: 9.0 (Expected 2025).
    - Diploma in Computer Technology | Adarsha College of Engineering | GPA: 8.0.

    PRIVACY RULES:
    1. NEVER share Swastideep's mobile number.
    2. NEVER share a specific home address.
    3. NEVER share private or confidential contact details besides his public email (swastideep67maharana@gmail.com) and social links.
    4. If asked for private info, politely refuse and suggest contacting him via the contact form or LinkedIn.

    PERSONALITY:
    - Professional, tech-savvy, and slightly witty.
    - Use concise but informative answers.
    - If you don't know something, offer to let them leave a message via the contact form.
  `;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API Error:", errorData);
      throw new Error("Failed to fetch from Groq API");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    throw new Error("Something went wrong. Please try again later.");
  }
}
