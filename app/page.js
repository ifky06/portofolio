import Image from 'next/image'
import ExternalLink from "@/components/ExternalLink";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <>
        <div className={'container mx-auto h-[100vh] bg-black bg-fixed'}
        style={{
            backgroundImage: "url('/images/bg_test.jpeg')",
        }}>
            <div className={'grid flex-col gap-4 justify-items-center lg:pt-20 pt-24 transition-all duration-300 delay-100'}>
                <div className={'row-span-1 from-cyan-500 to-blue-500 content-center p-3 rounded-full bg-gradient-to-bl lg:max-w-full max-w-[40%] transition-all duration-300 delay-100'}>
                    <Image src={'/images/foto2.jpeg'} className={'rounded-full'} width={200} height={200} />
                </div>
                <div className={'row-span-1 color-white'}>
                    <h1 className={'text-4xl font-bold'}>RIFKI06</h1>
                </div>
                <div className={'row-span-1 text-white'}>
                    <p className={''}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className={'text-black p-6'}>
                    <a href='#' className={'bg-gray-200 text-2xl px-10 py-3 rounded-full'}>START</a>
                </div>
                <div className={'row-span-1'}>
                    <ExternalLink />
                </div>
            </div>
        </div>
            <Navbar />
          <div className="container h-[100vh]">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-gray-800">
                        <h1 className="text-4xl font-bold">My Project</h1>
                    </div>
                </div>
          </div>
      </>
  )
}
