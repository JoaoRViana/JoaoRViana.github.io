import { useDispatch } from 'react-redux';
import { change } from '@/app/redux/features/changeTheme';
import { AppDispatch } from '@/app/redux/store';
import { useAppSelector } from '@/app/redux/store';
import Image from 'next/image';
import sun from '../../public/sun.png';
import moon from '../../public/moon.png';

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useAppSelector((state) => state.changeReducer.value);

  const scrollTo = (section:string) => {
    const projectsSection = document.getElementById(section);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex justify-between p-5 mt-2" id='header'>
      <div>
        <button
          onClick={() => {
            dispatch(change());
            if (theme.name === 'lightMode') {
              document.documentElement.style.setProperty(
                '--firstColor',
                'rgb(78, 218, 78)'
              );
              document.documentElement.style.setProperty(
                '--secondColor',
                'rgb(21, 58, 21)'
              );
            } else {
              document.documentElement.style.setProperty(
                '--firstColor',
                'rgb(116, 169, 240)'
              );
              document.documentElement.style.setProperty(
                '--secondColor',
                'rgb(5, 24, 49)'
              );
            }
          }}
        >
          {theme.name === 'lightMode' ? (
            <Image src={sun} width={50} height={50} alt="sun" />
          ) : (
            <Image src={moon} width={50} height={50} alt="moon" />
          )}
        </button>
      </div>
      <div className="w-[50%]"></div>
      <div className="flex justify-between  sm:w-[40%] md:w-[20%] lg:w-[20%]">
        <button onClick={()=>{scrollTo('projectsSection')}} className={`${theme.backgroundButtonOverAll} font-bold py-2 px-2 rounded border-b-4`}>Projetos</button>
        <button onClick={()=>{scrollTo('certificatesSection')}} className={`${theme.backgroundButtonOverAll} font-bold py-2 px-2 rounded border-b-4`}>Certificados</button>

      </div>
    </div>
  );
}
