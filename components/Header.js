import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import SanityClient from "@/utils/SanityClient";
import ParallaxBackground from "@/components/ParallaxBackground";
import LargeButton from "@/components/LargeButton";

async function getData() {
    const res = await SanityClient.getClient()?.fetch(`*[_type == "profile"]{name, bio, "imgUrl": image.asset->url, "bgUrl": background.asset->url}`);
    return res[0];
}

export default async function Header() {
    const data = await getData();


    return(
        <div className={'container mx-auto h-[100vh] bg-fixed'}>
                <ParallaxBackground ImageURL={data['bgUrl']} />
            <div className={'grid flex-col gap-4 justify-items-center lg:pt-20 pt-24 transition-all duration-300 delay-100'}>
                <div className={'row-span-1 from-cyan-500 to-blue-500 content-center p-3 rounded-full bg-gradient-to-bl lg:max-w-full max-w-[40%] transition-all duration-300 delay-100'}>
                    <Image src={`${data['imgUrl']}?fit=crop&crop=top&h=200&w=200`} className={'rounded-full'} width={200} height={200} />
                </div>
                <div className={'row-span-1 color-white scale-[85%] lg:scale-100 transition-all'}>
                    <h1 className={'text-4xl font-bold'}>{data['name']}</h1>
                </div>
                <div className={'row-span-1 text-white scale-[85%] lg:scale-100 transition-all'}>
                    <p className={''}>
                        {data['bio']}
                    </p>
                </div>
                <div className={'row-span-1 scale-[85%] lg:scale-100 transition-all'}>
                    <div className={'h-[8px] bg-gradient-to-bl from-cyan-500 to-blue-500 w-[15rem] rounded-full'}/>
                </div>
                <div className={'text-black p-4 scale-[85%] lg:scale-100 transition-all'}>
                    <LargeButton id={'start-button'} title={'START'} link={'#techStack'} className={'text-2xl px-40 py-3 rounded-full font-extrabold'} />
                </div>
                <div className={'row-span-1'}>
                    <ExternalLink />
                </div>
            </div>
        </div>
    )
}