import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiMo Guardian OS",
  description: "Autonomous AI Operating Layer for Xiaomi Ecosystem"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
