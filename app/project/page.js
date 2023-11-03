import Project from "@/models/Project";
import Link from "next/link";
import Image from "next/image";
import Line from "@/components/Line";
import LargeButton from "@/components/LargeButton";
import Navbar from "@/components/Navbar";

function ProjectCard({title, image, slug}) {
    return(
        <Link href={`/project/${slug}`}>
            <div className="lg:flex items-center overflow-hidden rounded-xl lg:w-[40rem] w-full bg-[#091230] shadow-md shadow-primary-blue/75 transition-all lg:hover:shadow-lg lg:hover:scale-[1.03] lg:hover:shadow-primary-blue">
                <Image src={image} className="w-full lg:h-32 lg:w-32 object-cover" alt="project-img" width={640} height={320}/>
                <h1 className="text-xl font-bold text-primary text-left bg-secondary py-4 px-5">{title}</h1>
            </div>
        </Link>
    )
}

export default async function ProjectList() {
    const projects = await Project.getProjects();

    return (
            <div className=" max-w-screen min-h-fit bg-[#0a0c21] ">
                <div className="mx-auto h-full flex flex-col justify-center items-center">
                    <div className="text-4xl font-bold text-white pt-10 pb-2 transition-all scale-[85%] lg:scale-100">My Project</div>
                    <Line className="h-[5px] w-[15rem] "/>
                    <div className="text-white text-center py-3 transition-all scale-[85%] lg:scale-100">
                        <p>Here are some of projects I have done.</p>
                    </div>
                    <div className="container w-100 flex flex-wrap lg:flex-col justify-center items-center transition-all gap-8 lg:w-full lg:gap-4 my-4 p-4">
                        {projects.map((project,index) => (
                                <ProjectCard key={index} title={project.title} image={project.imgUrl} slug={project.slug} />
                            )
                        )}
                    </div>
                </div>
            </div>
    )
}