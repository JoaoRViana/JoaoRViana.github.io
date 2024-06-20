import { TCertificates } from "@/types"
import { useAppSelector } from "@/app/redux/store";
import Image from "next/image"
import { borderEffect,stopBorderEffect,redirect } from "@/helper";

export default function CertificatesContainer(props:TCertificates){
    const {link,title,image,id}=props
    const theme = useAppSelector((state)=> state.changeReducer.value)
    let intervals: NodeJS.Timeout[] = []

    return(
        <><div id={id} className={`w-[284px] h-[374px]
            md:w-[574px] md:h-[514px] lg:w-[574px] lg:h-[514px] absolute z-0 rounded-lg`}
            ></div><div className={`w-[270px] h-[360px]
            md:w-[560px] md:h-[500px] lg:w-[560px] lg:h-[500px] flex items-center flex-wrap justify-center z-10 
            ${theme.backgroundCardProjects} ${theme.textCardProject} rounded-lg shadow-md overflow-hidden p-2`}
            onMouseEnter={() => {
                let border = document.getElementById(id);
                border?.classList.add('bg-custom-gradient')
               intervals.push(borderEffect());
              }} onMouseLeave={()=>{
                let border = document.getElementById(id);
                border?.classList.remove('bg-custom-gradient')
                stopBorderEffect(intervals)
                intervals=[]
              }}>
                <Image src={image}  alt={title} className="rounded-lg cursor-pointer" onClick={()=>{
                  redirect(link)
                }} />
            </div></>
    )
}