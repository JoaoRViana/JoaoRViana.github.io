'use client'
/* eslint-disable react/no-unescaped-entities */
import { useAppSelector } from "@/app/redux/store"

export default function AboutMe() {
    const theme = useAppSelector((state)=> state.changeReducer.value)
    return(
        <div className="lg:w-[60%] w-[90%]" id="aboutMe">
            <h2 className={`text-lg ${theme.textName} mb-2 md:text-center lg:text-start`}
            >João Ricardo - Desenvolvedor Full-Stack</h2>
            <div className={`${theme.backgroundAboutMe} p-4 rounded-lg shadow-md`}>
            <p className={`text-base ${theme.textAboutMe}`}>
            Durante meus estudos, adquiri conhecimento em desenvolvimento full-stack, integração de APIs, administração de bancos de dados e aplicação dos princípios SOLID. Minhas habilidades incluem Typescript, JavaScript ES6, ReactJS, NextJS, Node.js, Express, Docker, MySQL e ferramentas de teste como Mocha, Chai e Jest.
            Trabalhei com a empresa Lexart em um projeto open source, onde utilizei Vue, Vuetify e Firebase. Para a realização dos testes, utilizei Mocha, Chai e Sinon.
            </p>
            </div>
        </div>
    )
}