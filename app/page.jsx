"use client";

import Header from "@/components/Header";
import DownArrow from "@/components/DownArrow";
import Converter from "@/components/Converter";
import Donation from "@/components/Donation";

export default function Page() {
  return (
    <div className="min-h-screen bg-white/10 text-[#61577C]">
      <Header />
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-br from-[#AB9FF1] to-[#F4F2FF] text-transparent bg-clip-text mt-10 mx-6 text-center">Convert Sats</h1>
        <p className="text-xl font-semibold text-gray-800/60 font-mono mx-6 text-center">Between Bitcoin and Currencies</p>
      <DownArrow width={200} height={200} fill="#AB9FF1" />
      <Converter />
      <Donation />
    </div>
  );
}