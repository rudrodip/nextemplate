import MobileFooter from "./mobile-footer";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default async function SiteFooter() {
  return (
    <main className="border-t mt-6 backdrop-blur-sm">
      <section
        id="footer"
        className="container mx-auto hidden p-4 md:p-6 lg:p-10 lg:grid grid-cols-1 lg:grid-cols-3 items-center gap-6"
      >
        <div className="flex flex-col items-start ml-10">
          <div className="flex justify-center items-center gap-3 mb-3">
            <Icons.logo />
            <h1 className="font-heading text-center">{siteConfig.name}</h1>
          </div>
          <p className="max-w-sm text-sm">{siteConfig.description}</p>
        </div>
        <div id="support" className="flex flex-col items-start ml-10">
          <h1 id="contact" className="font-heading mb-3">
            Socials
          </h1>
          {Object.keys(siteConfig.links).map((key) => {
            const typedKey = key as keyof typeof siteConfig.links;
            const capitalizedKey =
              typedKey.charAt(0).toUpperCase() + typedKey.slice(1);

            return (
              <a
                key={typedKey}
                href={siteConfig.links[typedKey]}
                target="_blank"
                className="text-sm"
              >
                {capitalizedKey}
              </a>
            );
          })}
        </div>
        <div>
          <a
            href={siteConfig.links.github}
            target="_blank"
            className="flex justify-start items-center gap-3 mb-3"
          >
            <Icons.gitHub width={30} height={30} />
            <h1 className="font-heading text-center">
              {siteConfig.name.toLocaleLowerCase()}
            </h1>
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            className="max-w-sm text-sm"
          >
            Feel free contribute at {siteConfig.links.github}
          </a>
        </div>
      </section>
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
    </main>
  );
}
