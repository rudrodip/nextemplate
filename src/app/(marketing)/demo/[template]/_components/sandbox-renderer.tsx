"use client";

import { useState } from "react";
import { RenderFiles } from "./files-renderer";
import { FileContents } from "@/types";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type SandboxRendererProps = {
  fileContents: FileContents;
  children: React.ReactNode;
};

export default function SandboxRenderer({
  fileContents,
  children,
}: SandboxRendererProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="flex w-full min-w-0 justify-between items-center space-x-2">
        <h1 className="text-sm rounded border p-2">Virtual Sandbox</h1>
        <div className="flex justify-center items-center space-x-2">
          <Switch
            id="code"
            checked={showCode}
            onCheckedChange={() => setShowCode(!showCode)}
          />
          <Label htmlFor="code">Show Code</Label>
        </div>
      </div>
      <div className="border rounded relative flex justify-start items-center flex-col w-full h-auto lg:aspect-video overflow-x-hidden my-4 scroll-m-0 bg-background">
        {showCode ? (
          <RenderFiles fileContents={fileContents} />
        ) : (
          <div className="flex-1 w-full overflow-y-auto p-4">{children}</div>
        )}
      </div>
    </div>
  );
}
