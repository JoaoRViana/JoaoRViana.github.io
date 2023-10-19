import { TProject } from "@/types"
import Image from "next/image"


export default function ProjectsContainer(props:TProject){
    const {description,title,image,deploy,repositorio} = props
    return(
        <div className="w-[400px] h-[600px] flex items-center flex-wrap justify-center font-semibold p-2
        bg-gray-300 text-gray-800 rounded-lg shadow-md overflow-hidden">
            <h1 className="text-center w-full text-yellow-600 text-xl">{title}</h1>
            <Image src={image} width={400} height={200} alt={title}></Image>
            <p className="text-center">{description}</p>
            <div className="flex justify-around w-full">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:text-gray-500" disabled={deploy !==null ?false:true}>{deploy ===null?<p>Deploy</p>:<a target='_blank' href={deploy !==null?deploy:''}>Deploy</a>}</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:text-gray-500" disabled={repositorio !==null ?false:true}>{repositorio!==null?<a target='_blank' href={repositorio}>Repositorio</a>:''}</button>
            </div>
        </div>
    )
}