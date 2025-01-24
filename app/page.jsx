"use client";

import Header from "@/components/Header";
import Intro from "@/components/Intro";
import DownArrow from "@/components/DownArrow";
import Converter from "@/components/Converter";
import Donation from "@/components/Donation";

export default function Page() {
  return (
    <div className="min-h-screen bg-white/10 text-[#61577C]">
      <Header />
       <Intro />
        <DownArrow width={200} height={200} fill="#AB9FF1" />
       <Converter />
      <Donation />
    </div>
  );
}