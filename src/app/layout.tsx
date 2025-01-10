import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "PingPanda",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html className={cn(inter.variable, eb_garamond.variable)} lang="en">
      <body className="min-h-[calc(100vh-1px)] flex flex-col font-sans antialiased bg-brand-50 text-brand-950">
        <main className="relative flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
