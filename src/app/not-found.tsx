import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not found | NexTemplate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/404.png`,
        width: 1440,
        height: 1024,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/404.png`],
    creator: siteConfig.creator.name,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="card">
        <div className="card-content">
          <h3 className="primary-gradient text-5xl font-bold">
            404 Not found!
          </h3>
          <h1 className="text-lg text-center">
            The stuff you are looking for does not exist.
          </h1>
          <Link href="/" className="text-center underline-animation text-xl">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
