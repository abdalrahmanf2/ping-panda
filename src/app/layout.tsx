import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "PingPanda",
    description: "Saas",
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
            <body className="font-sans antialiased bg-brand-50 text-brand-950">
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
