import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div className="relative flex h-screen flex-col">
                        <Navbar />
                        <main className="mx-[30px] flex-grow pt-6">
                            {children}
                        </main>
                        <footer className="flex w-full items-center justify-center py-3 text-center text-foreground-500">
                            <p>
                                © Copyright 2020-2024 demonlistvn.com. <br />
                                All rights reserved demonlistvn.com and Demon
                                List VN are in no way affiliated with
                                RobTopGamesAB ®
                            </p>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
