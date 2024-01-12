import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdxComponent";
import MdxHeaderAnimation from "@/components/mdx/mdx-header-animation";
import { getTableOfContents } from "@/lib/toc";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import "@/styles/mdx.css";
import { Metadata } from "next";

async function getpageFromParams(params: { slug: string }) {
  const slug = params.slug;
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }
  return page;
}

export default async function AboutPage() {
  const page = await getpageFromParams({ slug: "about" });
  const contact = await getpageFromParams({ slug: "contact" });

  if (!page) {
    notFound();
  }

  const toc = await getTableOfContents(page.body.raw);

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div className="hidden text-sm min-[1790px]:inline-flex">
        <div className="fixed top-28 right-[100px] h-full z-40">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
      <div id="contact" className="mx-auto w-full min-w-0">
        <MdxHeaderAnimation title={page.title} description={page.description} />
        <Mdx code={page.body.code} />
        <hr className="my-4 md:my-6" />
        {contact && <Mdx code={contact.body.code} />}
      </div>
    </article>
  );
}
