import Image from "next/image";
import { allCertificates } from "@/data";
import { useAppSelector } from "@/app/redux/store";

export default function CertificatesSection(){
    const theme = useAppSelector((state)=> state.changeReducer.value)
    return(
        <div className="mt-8">
            <div className='w-full'>
                <h1 className='mx-auto text-center mb-5 text-xl'>Certificados</h1>
            </div>
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