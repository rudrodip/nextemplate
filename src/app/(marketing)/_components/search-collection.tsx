"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { TemplateCatalogue } from "./template-catalogue";
import { ComponentDetails } from "@/types";

type SearchCollectionProps = {
  files: {
    file: string;
    componentDetails: ComponentDetails;
  }[];
};

export default function SearchCollection({ files }: SearchCollectionProps) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = Array.from(
    new Set(files.map((file) => file.componentDetails.tags).flat())
  );

  const filteredFiles = files.filter((file) => {
    const isQueryMatched =
      file.componentDetails.published &&
      (query.length === 0 ||
        file.file.toLowerCase().includes(query.toLowerCase()) ||
        file.componentDetails.desc
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        file.componentDetails.tags
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        file.componentDetails.title
          .toLowerCase()
          .includes(query.toLowerCase()));

    const isTagMatched =
      file.componentDetails.published &&
      (selectedTags.length === 0 ||
        selectedTags.every((tag) => file.componentDetails.tags.includes(tag)));
    return isQueryMatched && isTagMatched;
  });

  const sortedFilteredFiles = filteredFiles.sort((a, b) => {
    const aDate = new Date(a.componentDetails.date);
    const bDate = new Date(b.componentDetails.date);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <div className="w-full flex flex-col gap-3 justify-start items-start px-2">
      <Input
        id="search"
        className="w-full grayscale"
        placeholder="🔍 search here"
        onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
      />
      <div className="w-full flex flex-wrap justify-center items-center gap-4 my-4">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`px-2 py-1 rounded-md text-sm font-medium ${
                selectedTags.includes(tag)
                  ? "bg-accent-foreground text-accent"
                  : "bg-accent text-accent-foreground"
              }`}
              onClick={() => {
                if (selectedTags.includes(tag)) {
                  setSelectedTags(
                    selectedTags.filter((selectedTag) => selectedTag !== tag)
                  );
                } else {
                  setSelectedTags([...selectedTags, tag]);
                }
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-3 justify-start items-start px-2">
        {sortedFilteredFiles.map((detail, index) => {
          return (
            <TemplateCatalogue
              key={index}
              componentDetails={detail.componentDetails}
              href={`/demo/${detail.file}`}
            />
          );
        })}
      </div>
    </div>
  );
}
