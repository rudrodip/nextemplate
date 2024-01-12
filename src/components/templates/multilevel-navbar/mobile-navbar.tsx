import * as React from "react";
import Link from "next/link";

import type { DefaultNavbarItem } from "./types";
import { navbarConfig } from "./navbarConfig";
import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import { SheetClose } from "@/components/ui/sheet";

export function MobileNav() {
  useLockBody();

  return (
    <div className="relative grid gap-6 rounded-md bg-popover p-4 text-popover-foreground">
      <nav className="grid grid-flow-row auto-rows-max text-sm">
        {navbarConfig.map((item, index) => (
          <SheetClose asChild key={item.href}>
            <NavMenu item={item}></NavMenu>
          </SheetClose>
        ))}
      </nav>
    </div>
  );
}

const NavMenu = ({ item }: { item: DefaultNavbarItem }) => {
  return (
    <div className="translate-x-4">
      <Link
        href={item.href}
        className={cn(
          "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
          item.disabled && "cursor-not-allowed opacity-60"
        )}
      >
        <p>{item.title}</p>
      </Link>
      {item.children.map((item, index) => (
        <Link
          key={index}
          href={item.disabled ? "#" : item.href}
          className={cn(
            "translate-x-4 flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
            item.disabled && "cursor-not-allowed opacity-60"
          )}
        >
          <p>
            {item.title}
            {item.children.map((child, index) => {
              return (
                <SheetClose asChild key={child.href}>
                  <NavMenu item={child}></NavMenu>
                </SheetClose>
              );
            })}
          </p>
        </Link>
      ))}
    </div>
  );
};
