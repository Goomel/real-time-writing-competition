"use client";
import { Suspense } from "react";
import WritingPlatform from "./components/WritingPlatform";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl font-bold mb-6 lg:mb-8">Real-time Writing Competition</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <WritingPlatform />
        </Suspense>
      </main>
    </div>
  );
}