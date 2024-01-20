import Image from "next/image";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Sponsor from "@/components/Sponsor";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Sponsor/>
    </div>
  );
}
