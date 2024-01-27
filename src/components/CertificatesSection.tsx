import Image from "next/image";
import { allCertificates } from "@/data";
import { useAppSelector } from "@/app/redux/store";
import { useEffect } from "react";

export default function CertificatesSection(){
    const theme = useAppSelector((state)=> state.changeReducer.value)
    useEffect(() => {
        let deg = 10;
    
        const styledBorder = () => {
          if (typeof window !== "undefined") {
            const rootStyles = window.getComputedStyle(document.documentElement);
            const degValue = rootStyles.getPropertyValue("--deg");
            deg = +degValue.replace("deg", "");
            deg += 1;
    
            if (deg >= 360) {
              deg = 1;
            }
    
            document.documentElement.style.setProperty("--deg", `${deg}deg`);
          }
        };
    
        const timer = setInterval(styledBorder, 10);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    return(
        <div className="mt-8">
            <div className="flex flex-wrap w-full justify-center" id="certificatesSection">
            {allCertificates.map((e,i)=>(
                <div key={i} className="p-5 py-8 smoothZoom flex justify-center items-center">
                        <div className={`w-[284px] h-[374px]
      md:w-[574px] md:h-[514px] lg:w-[574px] lg:h-[514px] bg-custom-gradient absolute z-0 rounded-lg`}></div>
                    <div className={`w-[270px] h-[360px]
      md:w-[560px] md:h-[500px] lg:w-[560px] lg:h-[500px] flex items-center flex-wrap justify-center z-10 ${theme.backgroundCardProjects} ${theme.textCardProject} rounded-lg shadow-md overflow-hidden p-2`}>
                    <a href={e.link} target="_blank" className="">
                     <Image src={e.image} width={580} height={400} alt={e.title} className="rounded-lg" />
                    </a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}