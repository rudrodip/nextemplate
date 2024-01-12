interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function DemoLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto">{children}</div>
  );
}
