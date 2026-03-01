"use client";
import { Suspense } from "react";
import WritingPlatform from "./components/WritingPlatform";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-2xl font-bold mb-4 lg:mb-6">Real-time Writing Competition</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <WritingPlatform />
        </Suspense>
      </main>
    </div>
  );
}