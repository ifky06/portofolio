import Image from 'next/image'
import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import MyProject from "@/components/MyProject";
import Footer from "@/components/Footer";
import {Suspense} from "react";
import Loading from "@/app/loading";
import {data} from "autoprefixer";
import Profile from "@/models/Profile";

export default async function Home() {
   const data = await Profile.getProfile();
  return (
      <>
          <Suspense fallback={<Loading />}>
          <Header />
          <Navbar profileName={data.nickname} />
          <TechStack />
          <MyProject />
          <Footer profileName={data.nickname} />
          </Suspense>
      </>
  )
}
