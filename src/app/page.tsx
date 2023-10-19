'use client'
import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import ProjectsSection from "@/components/ProjectsSection"
import Contact from "@/components/Contact"
import { useAppSelector } from "./redux/store"


export default function Home() {
  const theme = useAppSelector((state)=> state.changeReducer.value)
  return (
    <main className={`px-[15%] ${theme.background} ${theme.textOverAll} font-semibold absolute`}>
      <Header />
      <div className="flex justify-center lg:justify-between flex-wrap items-center">
      <AboutMe/>
      <Contact />      
      </div>
      <ProjectsSection />
    </main>
  )
}
