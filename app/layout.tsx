"use client";
import "./globals.css";
import { useState } from "react";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import clsx from "classnames";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dealls Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //LOCAL STATE
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <body>
        <div className="flex h-full overflow-hidden">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={clsx(isOpen ? "w-0 sm:w-full" : "w-full")}>
            <div className="h-24">
              <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="h-fit px-7 pb-14 overflow-auto">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
