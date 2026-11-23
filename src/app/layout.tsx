import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";
export const metadata: Metadata = {
 title: "Swathi Shree Hospital | Your Health, Our Priority",
 description: "Connect with Swathi Shree Hospital in Thiruvannamalai for department information, hospital enquiries and care services.",
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><StoreProvider>{children}</StoreProvider></body></html>; }
