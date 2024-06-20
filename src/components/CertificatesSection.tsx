import { allCertificates } from "@/data";
import CertifcatesContainer from './CertificatesContainer';

export default function CertificatesSection(){
    return(
        <div className="mt-8">
            <div className="flex flex-wrap w-full justify-center" id="certificatesSection">
            {allCertificates.map((e,i)=>(
                <div key={i} className="p-5 py-8 smoothZoom flex justify-center items-center">
                       <CertifcatesContainer link={e.link} image={e.image} title={e.title} id={`certificateId${i}`}></CertifcatesContainer>
                </div>
            ))}
            </div>
        </div>
    )
}