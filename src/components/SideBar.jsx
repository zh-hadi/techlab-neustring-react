import {React, useState} from 'react'
import poweredBy from '../assets/power-by.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ActiveIcon from '../assets/icon-active.svg'
import { useLocation } from 'react-router-dom'
import { useSolutionPageIndex } from '../contexts/SolutionPageContext'

const SideBar = ({handler, linkColor}) => {
    const [active, setActive] = useState(true);
   

    const linkClass = ({ isActive }) => {
        const baseClass = `font-montserrat font-bold flex gap items-center gap-1]`;
        const isActiveClass = "text-green-500 font-bold "
        const notActiveClass = "font-normal"

        return isActive ? `${baseClass} ${isActiveClass}` : `${baseClass} ${notActiveClass}`
    }

    const shadow = ({isActive}) =>
        isActive ? "h-2 w-2 bg-red-500 ": 'hidden';

    console.log(linkClass)


    const location = useLocation();
    console.log(location.pathname)



    const {solutionIndex, setSolutionIndex} = useSolutionPageIndex();
    const incrementIndex = () => {
        if(solutionIndex === 6){
            setSolutionIndex(0);
        }else{
            setSolutionIndex((prevIndex) => prevIndex + 1);
        }
    }

  return (
    <div className='w-[300px] flex flex-col justify-between absolute top-0 bottom-0 z-20'>
        <div className='flex flex-col justify-center flex-1 gap-2'> 

            {/* <NavLink>
                hello
            </NavLink> */}
            <NavLink to="/home" className={linkClass} style={{ color: linkColor}}> 
                {({ isActive }) => {
                    return (
                    <>
                        <img
                        className={`size-1.5 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                        src={ActiveIcon}
                        alt=""
                        />
                        <span>Home</span>
                    </>
                    );
                }}
            </NavLink>

            <NavLink to="/about" className={linkClass} style={{ color: linkColor}}> 
               {({isActive})=> {
                return (
                    <>
                        <img
                            className={`size-1.5 ${isActive? 'opacity-100' : 'opacity-0'}`}
                            src={ActiveIcon}
                            alt=""
                        />
                        <span>About</span>
                    </>
                )
               }}
            </NavLink>

            <NavLink to="/solution" className={linkClass} style={{ color: linkColor}} onClick={incrementIndex}> 
               {({isActive}) => {
                return (
                    <>
                        <img
                            className={`size-1.5 ${isActive? 'opacity-100' : 'opacity-0'}`}
                            src={ActiveIcon}
                            alt=""
                        />
                        <span>Solution</span>
                    </>
                )   
               }}
            </NavLink>

            <NavLink to="/community" className={linkClass} style={{ color: linkColor}}> 
                {({isActive}) => {
                 return (
                      <>
                            <img
                             className={`size-1.5 ${isActive? 'opacity-100' : 'opacity-0'}`}
                             src={ActiveIcon}
                             alt=""
                            />
                            <span>Community</span>
                      </>
                 )   
                }}  
            </NavLink>

            <NavLink to="/contact" className={linkClass} style={{ color: linkColor}}> 
                {({isActive}) => {
                 return (
                      <>
                            <img
                             className={`size-1.5 ${isActive? 'opacity-100' : 'opacity-0'}`}
                             src={ActiveIcon}
                             alt=""
                            />
                            <span>Contact</span>
                      </>
                 )
                }}
            </NavLink>
           
  
 
        </div>
     
        <div className={location.pathname === '/home' ? 'opactiy-100' : 'opacity-0'}>
            <h3 className='text-white'>Powered by</h3>
            <img className='bg-slate-800 px-3 py-2 rounded-md' src={poweredBy} alt="" />
        </div>

        {/* { location.pathname === '/home' &&
        <div>
            <h3 className='text-white'>Powered by</h3>
            <img className='bg-slate-800 px-3 py-2 rounded-md' src={poweredBy} alt="" />
        </div>
        } */}
    </div>
  )
}

export default SideBar
