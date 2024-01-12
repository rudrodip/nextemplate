import { promises as fs } from "fs";
import path from "path";
import SearchCollection from "./search-collection";
import { ComponentDetails } from "@/types";

export default async function TemplateCollection() {
  const componentsDirectory = path.join(
    process.cwd(),
    "src/components/templates"
  );

  const components = await fs.readdir(componentsDirectory);
  const fileContentsPromises = components.map(async (file) => {
    const filePath = path.join(componentsDirectory, file);
    const componentDetails: ComponentDetails = JSON.parse(
      await fs.readFile(path.join(filePath, "component-details.json"), "utf8")
    );
    return { file: file, componentDetails };
  });

  const details = await Promise.all(fileContentsPromises);

  return (
    <div className="w-full flex flex-col gap-3 justify-start items-start my-16">
      <SearchCollection files={details} />
    </div>
  );
}
