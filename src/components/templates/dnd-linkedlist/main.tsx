"use client";
import React, { useState } from "react";

import { DoublyLinkedList } from "./linkedlist";
import { Button } from "@/components/ui/button";

interface ListItem {
  id: number;
  text: string;
}

const initialItems: ListItem[] = [
  { id: 1, text: "🐍 Python" },
  { id: 2, text: "🔍 TypeScript" },
  { id: 3, text: "🚀 Go" },
  { id: 4, text: "🦀 Rust" },
];

const LinkedListReorderList: React.FC = () => {
  const [list, setList] = useState(new DoublyLinkedList(initialItems));

  const initializeList = () => {
    setList(new DoublyLinkedList(initialItems));
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: number) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData("text/plain"), 10);

    if (draggedId !== targetId) {
      list.moveNode(draggedId, targetId);
      console.log(list.toArray());
      setList(new DoublyLinkedList(list.toArray()));
    }
  };

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-center text-xl max-w-sm mb-5">
        Try dragging the items. This feature is completely implemented from
        scratch and is a good example of using a doubly linked list data
        structure.
      </h1>
      <div className="flex flex-col gap-2">
        <Button onClick={initializeList} className="mb-4">
          Initialize List
        </Button>
        {list.toArray().map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragOver={(e) => handleDragOver(e, item.id)}
            onDrop={(e) => handleDrop(e, item.id)}
            className="p-4 text-lg font-heading border bg-secondary/20 backdrop-blur-md rounded w-[300px]"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedListReorderList;
