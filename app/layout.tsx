import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./article.css";
import "./faq.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "hklife.ai";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "HKLife.ai — Everything about starting a new life in Hong Kong.";
  const description = "身份、生活、孩子、创业与财富。帮助每一个家庭更从容地在香港开始新生活。";
  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, images: [{ url: new URL("/og.png", base).toString(), width: 600, height: 315 }], locale: "zh_CN", type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base).toString()] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hans"><body>{children}</body></html>;
}
