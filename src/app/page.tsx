'use client'
import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import ProjectsSection from "@/components/ProjectsSection"
import Contact from "@/components/Contact"
import { AppDispatch } from '@/app/redux/store';
import { useDispatch } from 'react-redux';
import { otherSection } from "./redux/features/changeTheme"
import { useAppSelector } from "./redux/store"
import Footer from "@/components/Footer"
import CertificatesSection from "@/components/CertificatesSection"
import { useEffect, useState } from "react"


export default function Home() {
  const theme = useAppSelector((state)=> state.changeReducer.value)
  const dispatch = useDispatch<AppDispatch>();
  const [selectSection,setSelectSection] = useState(0)
  const [section,setSection] = useState(
  [
  {title:'Meus principais projetos',content: <ProjectsSection />},
  {title:'Certificados',content: <CertificatesSection />}
])
  const number = useAppSelector((state)=>state.changeReducer.section)
  const changeSection=(value:number)=>{
    if(value <0){
      selectSection + value <0?dispatch(otherSection(section.length-1)):dispatch(otherSection(selectSection+value))
    }
    else{
      selectSection +value >= section.length?dispatch(otherSection(0)):dispatch(otherSection(selectSection+value))
    }
  }
  const renderEffect= ()=>{
    const sections= document.getElementById('sections');
    const effect = document.createElement('div');
    effect.id='effect'
    const background = theme.name == 'lightMode'?'rgb(226 232 240)':'black'
    effect.style.background = background
    effect.className='renderEffect'
    if(sections){
      sections.appendChild(effect)
      setTimeout(()=>{
          sections.removeChild(effect)
      },2000)
    }
}
  useEffect(()=>{
    if(selectSection !== number){
      setTimeout(()=>{
        setSelectSection(number);
      },1000)
      renderEffect()
    }
  },[number])
  return (
    <main className={`lg:px-[15%] md:px-[10%] px-5 ${theme.background} ${theme.textOverAll} styledText  absolute`}>
      <Header />
      
      <div className="flex justify-center lg:justify-between flex-wrap items-center">
      <AboutMe/>
      <Contact />      
      </div>
      <div className='w-full mt-8 flex justify-center text-xl text-center' id="sections">
        <button className="arrowBttn" onClick={()=>{changeSection(-1)}}>{'<-'}</button>
                <h1 className='mx-2 '>{section[selectSection].title}</h1>
                <button className="arrowBttn" onClick={()=>{changeSection(+1)}}>{'->'}</button>
            </div>
            {section[selectSection].content}
      <Footer/>
    </main>
  )
}
