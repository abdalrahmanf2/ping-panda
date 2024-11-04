import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "PingPanda",
    description: "Saas",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
};

export default RootLayout;
