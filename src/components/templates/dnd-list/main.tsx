"use client";

import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./item";

const initialItems = [
  "🐍 Python",
  "🕸️ JavaScript",
  "🔍 TypeScript",
  "🚀 Go",
  "🦀 Rust",
  "🐘 PHP",
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-center text-2xl font-semibold max-w-xl mb-5">
        Try draggin the items. Example taken from framer-motion{" "}
        <a
          href="https://codesandbox.io/s/framer-motion-5-drag-to-reorder-lists-uonye?from-embed"
          target="_blank"
          className="text-blue-500"
        >
          sandbox example
        </a>
      </h1>
      <Reorder.Group
        axis="y"
        onReorder={setItems}
        values={items}
        className="flex flex-col gap-2"
      >
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </Reorder.Group>
    </div>
  );
}
