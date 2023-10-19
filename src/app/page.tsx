import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import ProjectsSection from "@/components/ProjectsSection"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="px-[15%] bg-slate-200 styledText font-semibold ">
      <Header />
      <div className="flex lg:justify-between flex-wrap items-center">
      <AboutMe/>
      <Contact />      
      </div>
      <ProjectsSection />
    </main>
  )
}
