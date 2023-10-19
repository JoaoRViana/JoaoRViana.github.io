import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import ProjectsSection from "@/components/ProjectsSection"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="px-[15%] bg-slate-200 font-semibold">
      <Header />
      <AboutMe/>
      <ProjectsSection />
      <Contact />      
    </main>
  )
}
