"use client";
import { TechStack } from "./stacks";

export default function Main() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h1 className="text-center lg:hidden head-text-sm">
        Mobile version NOT SUPPORTED
      </h1>
      <TechStack />
    </div>
  );
}
