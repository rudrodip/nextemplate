"use client";

import Image from "next/image";

import type { DefaultNavbarItem } from "./types";

// default
import * as React from "react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNav } from "./mobile-navbar";
import { Menu } from "lucide-react";

type DefaultNavbarProps = {
  mainNav: DefaultNavbarItem[];
};

export const DefaultNavbar = ({ mainNav }: DefaultNavbarProps) => {
  return (
    <section className="border flex md:justify-evenly md:items-center py-2 px-3 rounded">
      <div className="lg:hidden mr-2 flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex-col" side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex justify-center items-center">
                  <Image src="/logo.png" alt="BI" width={100} height={20} />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
      <Link
        href="/"
        className="md:hidden ml-3 md:ml-0 flex justify-center items-center"
      >
        <Image src="/logo.png" alt="NextDemo" width={20} height={20} />
      </Link>
      <div className="hidden md:flex w-full justify-evenly items-center">
        {mainNav.map((item, idx) => (
          <React.Fragment key={idx}>
            <NavDropDownMenu item={item} />
            {idx < mainNav.length - 1 && <div className="w-6" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const NavDropDownMenu = ({ item }: { item: DefaultNavbarItem }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Link href={item.href} onMouseEnter={() => setOpen(!open)}>
          {item.title}
        </Link>
      </DropdownMenuTrigger>
      <div onMouseLeave={() => setOpen(!open)}>
        {item.children.length > 0 && (
          <DropdownMenuContent>
            {item.children.map((item, idx) =>
              item.children.length > 0 ? (
                <NavSubMenu key={idx} item={item}></NavSubMenu>
              ) : (
                <DropdownMenuItem key={idx}>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuContent>
        )}
      </div>
    </DropdownMenu>
  );
};

const NavSubMenu = ({ item }: { item: DefaultNavbarItem }) => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Link href={item.href}>{item.title}</Link>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {item.children.map((item, idx) =>
          item.children.length > 0 ? (
            <NavSubMenu key={idx} item={item} />
          ) : (
            <DropdownMenuItem key={idx}>
              <Link href={item.href}>{item.title}</Link>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};
