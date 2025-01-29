"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import DownArrow from "@/components/DownArrow";
import Converter from "@/components/Converter";
import Donation from "@/components/Donation";

export default function Page() {
  return (
    <>
      <Head>
        <title>Satoshi Calculator</title>
        <meta name="description" content="Bitcoin Unit Converter: Accurately convert between Satoshi, Bitcoin, and major currencies with precise and real-time rates." />
        <meta name="theme-color" content="#AB9FF1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white/10 text-[#61577C]">
        <Header />
        <Intro />
        <DownArrow width={200} height={200} fill="#AB9FF1" />
        <Converter />
        <Donation />
      </div>
    </>
  );
}