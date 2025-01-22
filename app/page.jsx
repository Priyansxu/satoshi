import Converter from "@/components/Converter";
import Header from "@/components/Header";
import DownArrow from "@/components/DownArrow";

export default function Page() {
  return (
  <div className="min-h-screen bg-[#F4F2FF] text-[#61577C]">
   <Header />
   <DownArrow width={50} height={50} fill="#AB9FF1" />
   <Converter />
  </div>
);
}