'use client'
import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import ProjectsSection from "@/components/ProjectsSection"
import Contact from "@/components/Contact"
import { useAppSelector } from "./redux/store"
import Footer from "@/components/Footer"


export default function Home() {
  const theme = useAppSelector((state)=> state.changeReducer.value)
  return (
    <main className={`lg:px-[15%] md:px-[10%] sm:px-5 ${theme.background} ${theme.textOverAll} font-semibold absolute`}>
      <Header />
      
      <div className="flex justify-center lg:justify-between flex-wrap items-center">
      <AboutMe/>
      <Contact />      
      </div>
      <ProjectsSection />
      <Footer/>
    </main>
  )
}
