"use client";
import AnimatedSidebar from "@/components/Sidebar/page";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex w-full min-h-screen text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(600px 400px at 10% 20%, rgba(99,102,241,0.18), transparent 15%), radial-gradient(500px 350px at 90% 80%, rgba(16,185,129,0.12), transparent 12%), #0b1020",
      }}
    >
      <div className="w-[70px] md:w-[240px] h-screen sticky top-0 z-20">
        <AnimatedSidebar />
      </div>

      <main className="flex-1 flex flex-col overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
