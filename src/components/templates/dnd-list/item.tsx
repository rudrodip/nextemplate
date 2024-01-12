"use client";

import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      value={item}
      id={item}
      style={{ boxShadow, y }}
      className="p-4 text-lg font-heading border bg-secondary/20 backdrop-blur-md rounded w-[300px]"
    >
      <span>{item}</span>
    </Reorder.Item>
  );
};
