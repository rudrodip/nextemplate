import { FileContents } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/codeblock";

export const RenderFiles = ({
  fileContents,
}: {
  fileContents: FileContents;
}) => {
  return (
    <div className="relative w-full bg-secondary/30 backdrop-blur-md overflow-y-hidden">
      <Tabs defaultValue="main.tsx" className="w-full">
        <TabsList className="flex justify-between gap-3 sticky top-0 z-50">
          <TabsTrigger value="main.tsx" className="w-full">
            main.tsx
          </TabsTrigger>
          {fileContents.map(
            (fileContent, index) =>
              fileContent.fileName !== "main.tsx" && (
                <TabsTrigger
                  key={fileContent.fileName}
                  value={fileContent.fileName}
                  className="w-full"
                >
                  {fileContent.fileName}
                </TabsTrigger>
              )
          )}
        </TabsList>
        {fileContents.map((fileContent, index) => (
          <TabsContent key={fileContent.fileName} value={fileContent.fileName}>
            <CodeBlock language="ts" value={fileContent.content} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
