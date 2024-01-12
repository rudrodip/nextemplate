"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { TemplateCatalogue } from "./template-catalogue";

type SearchCollectionProps = {
  files: {
    file: string;
    content: string;
  }[];
};

export default function SearchCollection({ files }: SearchCollectionProps) {
  const [query, setQuery] = useState("");

  const filteredFiles = files.filter((file) => {
    const isQueryMatched =
      query.length === 0 ||
      file.file.toLowerCase().includes(query.toLowerCase()) ||
      file.content.toLowerCase().includes(query.toLowerCase());
    return isQueryMatched;
  });

  return (
    <div className="w-full flex flex-col gap-3 justify-start items-start h-[600px] px-2">
      <Input
        id="search"
        className="w-full grayscale"
        placeholder="🔍 search here"
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredFiles.map((detail, index) => {
        return (
          <TemplateCatalogue
            key={index}
            componentDetails={JSON.parse(detail.content)}
            href={`/demo/${detail.file}`}
          />
        );
      })}
    </div>
  );
}
