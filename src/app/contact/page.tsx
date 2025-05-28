import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Swastideep Maharana",
  description:
    "Get in touch with Swastideep Maharana - a Full Stack Developer specializing in MERN stack development. Let's discuss your next project!",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="space-y-4">
        <span className="text-4xl">✉️</span>
        <Heading className="font-black">Get in Touch</Heading>
        <Paragraph className="max-w-xl">
          Have a project in mind or want to collaborate? I'd love to hear from you! 
          Feel free to reach out through the form below or connect with me on social media.
        </Paragraph>
      </div>
      <div className="mt-8">
        <Contact />
      </div>
    </Container>
  );
}
