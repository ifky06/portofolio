import Image from 'next/image'
import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import MyProject from "@/components/MyProject";
import Footer from "@/components/Footer";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function Home() {
  return (
      <>
          {/*<Suspense fallback={<Loading />}>*/}
          <Header />
          <Navbar />
          <TechStack />
          <MyProject />
          <Footer />
          {/*</Suspense>*/}
      </>
  )
}
