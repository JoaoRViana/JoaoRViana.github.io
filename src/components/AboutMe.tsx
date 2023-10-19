'use client'
/* eslint-disable react/no-unescaped-entities */
import { useAppSelector } from "@/app/redux/store"

export default function AboutMe() {
    const theme = useAppSelector((state)=> state.changeReducer.value)
    return(
        <div className="lg:w-[60%] md:w-full ">
            <h2 className={`text-lg ${theme.textName} mb-2 md:text-center lg:text-start`}
            >João Ricardo - Desenvolvedor Full-Stack</h2>
            <div className={`${theme.backgroundAboutMe} p-4 rounded-lg shadow-md`}>
            <p className={`text-base ${theme.textAboutMe}`}>
            Durante meu período de estudos, adquiri experiência substancial em desenvolvimento full-stack, integração de API's, administração de bancos de dados e aplicação dos princípios SOLID. Minhas habilidades abrangem Typescript, Javascript ES6, ReactJS, NextJS, Node.js, Express, Docker, MySQL e ferramentas de teste como Mocha, Chai e Jest.
            </p>
            </div>
        </div>
    )
}