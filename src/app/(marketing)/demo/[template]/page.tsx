import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { ComponentDetails } from "@/types";
import SandboxRenderer from "./_components/sandbox-renderer";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { template: string };
}): Promise<Metadata> {
  const template = await getTemplate(params.template);

  if (!template) {
    return {};
  }

  const url = siteConfig.url;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", template.componentDetails.title);
  ogUrl.searchParams.set("type", "NexTemplate");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: template.componentDetails.title,
    description: template.componentDetails.desc,
    openGraph: {
      title: template.componentDetails.title,
      description: template.componentDetails.desc,
      type: "article",
      url: absoluteUrl(`/demo/${template.componentDetails.title}`),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: template.componentDetails.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: template.componentDetails.title,
      description: template.componentDetails.desc,
      images: [ogUrl.toString()],
    },
  };
}

const getTemplate = async (template: string) => {
  const componentsDirectory = path.join(
    process.cwd(),
    "src/components/templates",
    template
  );
  const files = await fs.readdir(componentsDirectory);

  if (
    !files.includes("component-details.json") ||
    !files.includes("main.tsx")
  ) {
    return null;
  }

  const fileContentsPromises = files.map(async (file) => {
    const filePath = path.join(componentsDirectory, file);
    const content = await fs.readFile(filePath, "utf8");
    return { fileName: file, content };
  });

  const fileContents = (await Promise.all(fileContentsPromises)).filter(
    (fileContent, _) =>
      fileContent.fileName !== "component-details.json" &&
      fileContent.fileName !== "example.gif"
  );

  const componentDetails: ComponentDetails = await JSON.parse(
    await fs.readFile(
      path.join(componentsDirectory, "component-details.json"),
      "utf8"
    )
  );

  return {
    fileContents,
    componentDetails,
  };
};

export default async function Page({
  params,
}: {
  params: { template: string };
}) {
  const template = await getTemplate(params.template);

  if (!template) {
    notFound();
  }
  const fileContents = template.fileContents;
  const componentDetails = template.componentDetails;

  const DynamicMain = dynamic(
    () => import(`@/components/templates/${params.template}/main.tsx`),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <main className="relative my-4 lg:my-16">
      <div>
        <h1 className="head-text-sm primary-gradient">
          {componentDetails.title}
        </h1>
        <p>{componentDetails.desc}</p>
        <div className="max-w-3xl flex flex-wrap gap-2">
          {componentDetails.tags.map((tag, index) => {
            return (
              <p
                key={tag}
                className="text-sm text-muted-foreground bg-muted px-1 mt-1 rounded border cursor-pointer"
              >
                {`#${tag}`}
              </p>
            );
          })}
        </div>
      </div>
      <SandboxRenderer fileContents={fileContents}>
        <DynamicMain />
      </SandboxRenderer>
    </main>
  );
}
