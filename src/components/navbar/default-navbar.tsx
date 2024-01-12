"use client";

import Link from "next/link";

import type { MainNavItem } from "@/types";
// default
import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNav } from "./mobile-navbar";
import { Menu } from "lucide-react";
import { Icons } from "@/components/icons";

type DefaultNavbarProps = {
  mainNav: MainNavItem[];
};

export const DefaultNavbar = ({ mainNav }: DefaultNavbarProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <section className="w-full flex md:justify-evenly md:items-center py-2">
      <div className="lg:hidden mr-2 flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex-col" side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex justify-center items-center">
                  <Icons.logo />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
      <Link
        href="/"
        className="md:hidden ml-3 flex justify-center items-center"
      >
        <Icons.logo />
      </Link>
      <div className="hidden md:flex w-full justify-between gap-4 items-center">
        {mainNav.map((item, idx) => {
          return (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
