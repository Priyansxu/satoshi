import Converter from "@/components/Converter";
import Header from "@/components/Header";
import DownArrow from "@/components/DownArrow";

export default function Page() {
  return (
  <div className="min-h-screen bg-white/10 text-[#61577C] bg-backdrop-blur-2xl">
   <Header />
   <DownArrow width={200} height={200} fill="#AB9FF1" />
   <Converter />
  </div>
);
}