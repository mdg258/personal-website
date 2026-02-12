import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "michael@portfolio",
  description: "Site Reliability Engineer specializing in infrastructure automation, networking, and DevOps. Cornell graduate with military background. Experience at Cisco Meraki, USAA, Meta, and US Army.",
  keywords: ["SRE", "DevOps", "Network Engineering", "Infrastructure", "Automation", "AWS", "Ansible", "Linux", "Cornell"],
  authors: [{ name: "Michael D. Glenn" }],
  openGraph: {
    title: "michael@portfolio",
    description: "Site Reliability Engineer specializing in infrastructure automation and networking",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
