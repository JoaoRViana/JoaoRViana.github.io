import { useDispatch } from 'react-redux';
import { change } from '@/app/redux/features/changeTheme';
import { otherSection } from '@/app/redux/features/changeTheme';
import { AppDispatch } from '@/app/redux/store';
import { useAppSelector } from '@/app/redux/store';
import Image from 'next/image';
import sun from '../../public/sun.png';
import moon from '../../public/moon.png';

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useAppSelector((state) => state.changeReducer.value);

  return (
    <div className="w-full flex justify-between mt-2 py-5" id='header'>
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
      <div className="flex justify-between w-[70%] md:w-[300px] lg:w-[300px]">
        <button onClick={()=>{
          dispatch(otherSection(0))
          const projectsSection = document.getElementById('sections');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
          }} className={`${theme.backgroundButtonOverAll} font-bold py-2 px-2 rounded border-b-4`}>Projetos</button>
        <button onClick={()=>{
          dispatch(otherSection(1))
          const projectsSection = document.getElementById('sections');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
          }} className={`${theme.backgroundButtonOverAll} font-bold py-2 px-2 rounded border-b-4`}>Certificados</button>
      </div>
    </div>
  );
}
