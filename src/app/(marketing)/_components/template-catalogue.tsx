import Image from "next/image";
import Link from "next/link";
import { ComponentDetails } from "@/types";
import { formatDate } from "@/lib/utils";

type TemplateCatalogueProps = {
  componentDetails: ComponentDetails;
  href: string;
};

export const TemplateCatalogue = ({
  componentDetails,
  href,
}: TemplateCatalogueProps) => {
  return (
    <Link
      href={href}
      className="w-full border rounded p-2 lg:p-4 flex gap-2 justify-start items-center"
    >
      <div className="flex flex-col justify-start items-start gap-1">
        <h1>{componentDetails.title}</h1>
        <p className="text-sm">{componentDetails.desc}</p>
        <p className="text-sm text-muted-foreground bg-muted px-1 mt-1 rounded border cursor-pointer">
          {formatDate(componentDetails.date)}
        </p>
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
    </Link>
  );
};
