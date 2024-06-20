import { TProject } from "@/types";
import Image from "next/image";
import { useAppSelector } from "@/app/redux/store";
import { borderEffect, stopBorderEffect, redirect } from "@/helper";

export default function ProjectsContainer(props: TProject) {
  const { description, title, image, deploy, repositorio, id } = props;
  const theme = useAppSelector((state) => state.changeReducer.value);
  let intervals: NodeJS.Timeout[] = [];

  return (
    <div className="flex items-center justify-center p-2 smoothZoom">
      <div
        id={id}
        className={`w-[284px] h-[614px]
          md:w-[414px] md:h-[614px] lg:w-[414px] lg:h-[614px] absolute z-0 rounded-lg`}
      ></div>
      <div
        className={`w-[270px] h-[600px]
          md:w-[400px] md:h-[600px] lg:w-[400px] lg:h-[600px] flex items-center flex-wrap justify-center z-10 ${theme.backgroundCardProjects} ${theme.textCardProject} rounded-lg shadow-md overflow-hidden p-2`}
        onMouseEnter={() => {
          let border = document.getElementById(id);
          border?.classList.add("bg-custom-gradient");
          intervals.push(borderEffect());
        }}
        onMouseLeave={() => {
          let border = document.getElementById(id);
          border?.classList.remove("bg-custom-gradient");
          stopBorderEffect(intervals);
          intervals = [];
        }}
      >
        <h1 className={`text-center w-full ${theme.titleTextProject} text-xl`}>
          {title}
        </h1>
        {image !== null ? (
          <Image src={image} width={400} height={200} alt={title} />
        ) : (
          ""
        )}
        <p className="text-center">{description}</p>
        <div className="flex justify-around w-full">
          <button
            className={`${theme.backgroundDeploy} ${theme.textCardProject} font-bold py-2 px-4 rounded border-b-4 disabled:text-gray-500`}
            disabled={deploy !== null ? false : true}
            onClick={() => {
              redirect(deploy);
            }}
          >
            deploy
          </button>
          <button
            className={`${theme.backgroundButtonRepositorio} ${theme.textCardProject} font-bold py-2 px-4 rounded border-b-4  disabled:text-gray-500`}
            disabled={repositorio !== null ? false : true}
            onClick={() => {
              redirect(repositorio);
            }}
          >
            Repositório
          </button>
        </div>
      </div>
    </div>
  );
}
