'use client'
import { useAppSelector } from "@/app/redux/store";

export default function Contact(){
    const theme = useAppSelector((state)=> state.changeReducer.value)
    return(
        <div id="contactSection" className={`${theme.backgroundAboutMe} ${theme.textAboutMe} p-4 rounded-lg shadow-md w-[320px] mt-10`}>

            <div className="flex items-center p-2">
                <h2 className="mr-2 w-[80px]">Linkedin: </h2>
                <a href="https://www.linkedin.com/in/joaoricardoviana" target="_blank" className={`${theme.backgroundButtonRepositorio} ${theme.textCardProject} font-bold py-2 px-4 rounded`}>joaoricardoviana</a>
            </div>
            <div className="flex items-center p-2">
                <h2 className="mr-2 w-[80px]">Github:</h2>
                <a href="https://github.com/JoaoRViana" target="_blank" className={`${theme.backgroundButtonRepositorio} ${theme.textCardProject} font-bold py-2 px-4 rounded`}>JoaoRViana</a>
            </div>
            <div className="p-2 flex items-center ">
                <h2 className="mr-2 w-[80px]">Email: </h2>
                <h2>joaorviana98@gmail.com</h2>
            </div>
            <div className="flex items-center p-2">
                <h2 className="mr-2 w-[80px]">Celular: </h2>
                <h2>(37) 99817-2080</h2>
            </div>
        </div>
    )
}