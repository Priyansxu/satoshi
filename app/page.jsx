"use client";

import Header from "@/components/Header";
import DownArrow from "@/components/DownArrow";
import Converter from "@/components/Converter";
import Donation from "@/components/Donation";

export default function Page() {
  return (
    <div className="min-h-screen bg-white/10 text-[#61577C] flex flex-col items-center justify-center">
      <Header />
      <div className="bg-white/40 rounded-lg p-6 mt-10 w-full max-w-md text-center">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-br from-[#AB9FF1] to-[#F4F2FF] text-transparent bg-clip-text">
          Convert Sats
        </h1>
        <p className="mt-4 text-xl font-semibold text-gray-800/60 font-mono">
          Between Bitcoin and Currencies
        </p>
      </div>
      <DownArrow width={200} height={200} fill="#AB9FF1" />
      <Converter />
      <Donation />
    </div>
  );
}