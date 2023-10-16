import Image from 'next/image'
import ExternalLink from "@/components/ExternalLink";

export default function Home() {
  return (
      <>
        <div className={'container mx-auto pt-20'}>
            <div className={'grid flex-col gap-4 justify-items-center'}>
                <div className={'row-span-1 bg-gray-200 content-center p-3 rounded-full'}>
                    <Image src={'/images/foto2.jpeg'} className={'rounded-full'} width={200} height={200} />
                </div>
                <div className={'row-span-1 color-white'}>
                    <h1 className={'text-4xl font-bold'}>RIFKI06</h1>
                </div>
                <div className={'row-span-1 color-white'}>
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
      </>
  )
}
