
import {SiReact, SiNextdotjs, SiLaravel, SiTailwindcss, SiFlutter, SiJquery, SiBootstrap} from 'react-icons/si';

function Card({children, title, className}){
    return(
        <div className={`bg-[#091230] rounded-lg shadow-lg w-32 h-32 p-4 ${className}`}>
            <div className="flex justify-center">
                {children}
            </div>
            <div className="text-center mt-3">
                <p className="text-xl font-bold">{title}</p>
            </div>
        </div>
    )
}
export default function TechStack() {
    return(
        <div id={'techStack'} className="max-w-screen min-h-fit bg-black ">
            <div className="container mx-auto h-full flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white pt-10 pb-2 transition-all scale-[85%] lg:scale-100">Tech Stack</div>
                    <div className={'h-[5px] bg-gradient-to-bl from-cyan-500 to-blue-500 w-[15rem] rounded-full transition-all scale-[85%] lg:scale-100'}/>
                <div className="text-white text-center py-3 transition-all scale-[85%] lg:scale-100">
                    <p>Here are some of the technologies I use in my projects.</p>
                </div>
                <div className="flex flex-wrap justify-center transition-all gap-8 lg:w-[50%] lg:gap-4 mt-4 p-4">
                    <Card title={'React'}>
                        <SiReact className="text-6xl text-blue-500" />
                    </Card>
                    <Card title={'NextJS'}>
                        <SiNextdotjs className="text-6xl text-blue-500" />
                    </Card>
                    <Card title={'Flutter'}>
                        <SiFlutter className="text-6xl text-blue-500" />
                    </Card>
                    <Card title={'Tailwind'}>
                        <SiTailwindcss className="text-6xl text-blue-500" />
                    </Card>
                    <Card title={'Laravel'}>
                        <SiLaravel className="text-6xl text-blue-500" />
                    </Card>
                    <Card title={'Jquery'}>
                        <SiJquery className="text-6xl text-blue-500" />
                    </Card>
                    <Card title={'Bootstrap'}>
                        <SiBootstrap className="text-6xl text-blue-500" />
                    </Card>
                    {/*<Card title={'React'}>*/}
                    {/*    <SiReact className="text-6xl text-blue-500" />*/}
                    {/*</Card>*/}
                </div>
            </div>
        </div>
    )
}

