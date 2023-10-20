import ProjectsContainer from "./ProjectsContainer";
import { allProjects } from "@/data";



export default function ProjectsSection(){
    return(
        <div className="mt-8">
            <div className="w-full">
            <h1 className="mx-auto text-center mb-5 text-xl">Meus principais projetos</h1>
            </div>
            <div className="flex flex-wrap w-full justify-center" id="projectsSection">
            {allProjects.map((e,i)=>(
                <div key={i} className="p-2 py-3">
                    <ProjectsContainer title={e.title} image={e.image} description={e.description} deploy={e.deploy} repositorio={e.repositorio}/>
                </div>
            ))}
            </div>
        </div>
    )
}