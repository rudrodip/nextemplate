import { siteConfig } from "@/config/site";
import TemplateCollection from "./_components/collection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="head-text-md primary-gradient text-center mt-8 md:mt-16 lg:mt-24">
        NexTemplate
      </h1>
      <p className="text-2xl my-4 text-center max-w-2xl">
        {siteConfig.description}
      </p>
      <TemplateCollection />
    </main>
  );
}
