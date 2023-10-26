import Image from 'next/image'
import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
      <>
          <Header />
            <Navbar />
          <TechStack />
      </>
  )
}
