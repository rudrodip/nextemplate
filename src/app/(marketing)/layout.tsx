import { marketingConfig } from "@/config/marketing";
import { DefaultNavbar } from "@/components/navbar/default-navbar";
import Link from "next/link";
import ThemeToggleDropDown from "@/components/theme/theme-toggler";
import SiteFooter from "@/components/footer/site-footer";
import { Icons } from "@/components/icons";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full md:w-auto sticky top-0 lg:top-2 mx-auto px-5 py-1 flex justify-between gap-4 md:rounded-lg bg-secondary/20 backdrop-blur-md z-40 border-gradient border-gradient-primary only-bottom">
        <Link
          href="/"
          className="hidden md:flex justify-center items-center w-full"
        >
          <Icons.logo />
          <h1 className="text-lg ml-2 font-medium transition-colors hover:text-foreground/80 sm:text-sm">
            Next-Demo
          </h1>
        </Link>
        <DefaultNavbar mainNav={marketingConfig.mainNav} />
        <div className="flex gap-2 items-center justify-between">
          <ThemeToggleDropDown />
        </div>
      </header>
      <main className="flex-1 app overflow-x-hidden lg:top-2">{children}</main>
      <SiteFooter />
    </div>
  );
}
