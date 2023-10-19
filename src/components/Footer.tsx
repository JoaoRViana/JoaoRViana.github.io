'use client'
import { useAppSelector } from "@/app/redux/store"

export default function Footer(){
    const theme = useAppSelector((state)=> state.changeReducer.value)

  const scrollToHeader = () => {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return(
        <div className="flex justify-center w-full py-2 mb-2">
            <button onClick={scrollToHeader} className={`${theme.backgroundButtonOverAll} font-bold py-2 px-4 rounded border-b-4`}>
                Voltar para o topo
            </button>
        </div>
    )
}