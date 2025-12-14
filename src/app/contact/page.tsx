import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Swastideep Maharana",
  description:
    "Get in touch with Swastideep Maharana - a Full Stack Developer specializing in MERN stack development. Let&apos;s discuss your next project!",
};

export default function ContactPage() {
  return (
    <Container className="max-w-screen-2xl">
      <Contact />
    </Container>
  );
}
