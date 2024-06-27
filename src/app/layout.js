"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/context";


export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </AppProvider>
  );
}
