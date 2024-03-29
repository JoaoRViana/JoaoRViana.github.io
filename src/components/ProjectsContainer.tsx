'use client'
import { TProject } from "@/types";
import Image from "next/image";
import { useEffect } from "react";
import { useAppSelector } from "@/app/redux/store";

export default function ProjectsContainer(props: TProject) {
  const { description, title, image, deploy, repositorio } = props;
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

  return (
    <div className="flex items-center justify-center p-2">
      <div className={`w-[284px] h-[614px]
      md:w-[414px] md:h-[614px] lg:w-[414px] lg:h-[614px] bg-custom-gradient absolute z-0 rounded-lg`}></div>
      <div className={`w-[270px] h-[600px]
      md:w-[400px] md:h-[600px] lg:w-[400px] lg:h-[600px] flex items-center flex-wrap justify-center z-10 ${theme.backgroundCardProjects} ${theme.textCardProject} rounded-lg shadow-md overflow-hidden p-2`}>
        <h1 className={`text-center w-full ${theme.titleTextProject} text-xl`}>{title}</h1>
        {image !== null?<Image src={image} width={400} height={200} alt={title} />:''}
        <p className="text-center">{description}</p>
        <div className="flex justify-around w-full">
          <button
            className={`${theme.backgroundDeploy} ${theme.textCardProject} font-bold py-2 px-4 rounded border-b-4 disabled:text-gray-500`}
            disabled={deploy !== null ? false : true}
          >
            {deploy === null ? <p>Deploy</p> : <a target="_blank" href={deploy !== null ? deploy : ""}>Deploy</a>}
          </button>
          <button
            className={`${theme.backgroundButtonRepositorio} ${theme.textCardProject} font-bold py-2 px-4 rounded border-b-4  disabled:text-gray-500`}
            disabled={repositorio !== null ? false : true}
          >
            {repositorio !== null ? <a target="_blank" href={repositorio}>Repositório</a> : ''}
          </button>
        </div>
      </div>
    </div>
  );
}
