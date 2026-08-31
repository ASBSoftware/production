import type { Metadata } from "next";
import "./globals.css";
import "./dashboard.css";
import "./mobile.css";
import "./cca.css";

export const metadata: Metadata = {
  title: "ClassCapture",
  description: "Secure daily class coverage dashboard",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
