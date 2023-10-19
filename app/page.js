import Image from 'next/image'
import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Home() {
  return (
      <>
          <Header />
            <Navbar />
          <div className="container h-[100vh] bg-black ">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-gray-800">
                        <h1 className="text-4xl font-bold">My Project</h1>
                    </div>
                </div>
          </div>
      </>
  )
}
