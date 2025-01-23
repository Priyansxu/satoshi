"use client";

import Header from "@/components/Header";
import DownArrow from "@/components/DownArrow";
import Converter from "@/components/Converter";
import Donation from "@/components/Donation";

export default function Page() {
  return (
 <h1 className="text-md font-bold tracking-tight text-gradient-to-br from-[#AB9FF1] to-white">Convert Sats between Bitcoin and Currencies</h1><span className="text-white">between Bitcoin and Currencies</span>
  <div className="min-h-screen bg-white/10 text-[#61577C]">
   <Header />
    <DownArrow width={200} height={200} fill="#AB9FF1" />
    <Converter />
   <Donation />
  </div>
);
}