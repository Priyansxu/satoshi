"use client";

import Header from "@/components/Header";
import DownArrow from "@/components/DownArrow";
import Converter from "@/components/Converter";
import Donation from "@/components/Donation";

export default function Page() {
  return (
    <div className="min-h-screen bg-white/10 text-[#61577C]">
      <Header />
      <h1 className="text-lg font-bold tracking-tight text-gradient-to-br from-[#AB9FF1] to-white">Convert Sats <br /><span className="text-white">between Bitcoin and Currencies</span></h1>
      <DownArrow width={200} height={200} fill="#AB9FF1" />
      <Converter />
      <Donation />
    </div>
  );
}