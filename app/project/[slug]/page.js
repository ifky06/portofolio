import {PortableText} from "@portabletext/react";
import Project from "@/models/Project";
import Image from "next/image";
import SanityImage from "@/helper/SanityImage";
import Line from "@/components/Line";
import Navbar from "@/components/Navbar";

const component = {
    types: {
        image: ({value}) => {
            return (
                <Image src={SanityImage.getUrlBuilder(value).url()} alt="project-img" width={640} height={320} className="rounded-xl my-4 w-1/2"/>
            )
        }
    }
}

export default async function({params}){
    const project = await Project.getProjectBySlug(params.slug);
    return (
        <div className="container mx-auto text-light pt-10 transition-all">
            <div className="flex justify-center">
                <img className="w-1/2 rounded-xl" src={project.imgUrl}/>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold text-center my-4 dark:text-primary-light transition-all">{project.title}</h1>
            <div className={'grid justify-items-center scale-[90%] lg:scale-100 transition-all'}>
                <Line className="h-[5px] w-[15rem]"/>
            </div>
            <div className="text-center my-4">
                {/*<span className="font-bold">Written by {post.author.name}</span>*/}
            </div>
            <div className="grid justify-items-center px-4 lg:px-0 my-4 text-gray-400 max-w-screen-md mx-auto text-sm lg:text-base text-justify leading-relaxed text-primary-light transition-all ">
                <PortableText value={project.content} components={component} />
            </div>
        </div>
    )
}