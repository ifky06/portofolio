import Image from "next/image";
import Link from "next/link";
import LargeButton from "@/components/LargeButton";
import Project from "@/models/Project";
import Line from "@/components/Line";

function ProjectCard({title, image, slug}) {
    return(
        <Link href={`/project/${slug}`}>
            <div className="overflow-hidden rounded-xl lg:w-96 w-full bg-[#091230] shadow-md shadow-primary-blue/75 transition-all lg:hover:shadow-lg lg:hover:scale-[1.03] lg:hover:shadow-primary-blue">
                <Image src={image} className="w-full lg:h-48 object-cover" alt="project-img" width={640} height={320}/>
                <h1 className="text-xl font-bold text-primary text-left bg-secondary py-4 px-5">{title}</h1>
            </div>
        </Link>
    )
}

export default async function MyProject() {
    const projectList = await Project.getFeaturedProjects();
    return (
        <div className="max-w-screen min-h-fit bg-[#0a0c21] mb-32">
            <div className="mx-auto h-full flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white pt-10 pb-2 transition-all scale-[85%] lg:scale-100">My Project</div>
                <Line className="h-[5px] w-[15rem] "/>
                <div className="text-white text-center py-3 transition-all scale-[85%] lg:scale-100">
                    <p>Here are some of projects I have done.</p>
                </div>
                <div className="flex flex-wrap justify-center transition-all gap-8 lg:w-full lg:gap-4 my-4 p-4">
                    {projectList.map((project,index) => (
                        <ProjectCard key={index} title={project.title} image={project.imgUrl} slug={project.slug} />
                        )
                    )}
                </div>
                <LargeButton id={'see-more-button'} title={'See More....'} link={'/project'} className={'text-xl px-36 py-2 rounded-md font-bold'}/>
            </div>
        </div>
    )
}
