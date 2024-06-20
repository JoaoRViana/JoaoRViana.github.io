import ProjectsContainer from "./ProjectsContainer";
import { allProjects } from "@/data";



export default function ProjectsSection(){
    return(
        <div className="mt-8">
            <div className="flex flex-wrap w-full justify-center" id="projectsSection">
            {allProjects.map((e,i)=>(
                <div key={i} className="p-2 py-3">
                    <ProjectsContainer id={`projectId${i}`} title={e.title} image={e.image} description={e.description} deploy={e.deploy} repositorio={e.repositorio}/>
                </div>
            ))}
            </div>
        </div>
    )
}