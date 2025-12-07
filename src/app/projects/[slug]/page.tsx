import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  
  if (product) {
    const stackString = product.stack?.join(",") || "";
    const baseUrl = "https://swastideep-maharana.vercel.app";
    const ogImageUrl = `${baseUrl}/og?title=${encodeURIComponent(product.title)}${stackString ? `&stack=${encodeURIComponent(stackString)}` : ""}`;
    
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        url: `${baseUrl}/projects/${slug}`,
        siteName: "Swastideep Maharana Portfolio",
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        description: product.description,
        images: [ogImageUrl],
      },
    };
  } else {
    return {
      title: "Projects | Swastideep",
      description:
        "Swastideep is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
