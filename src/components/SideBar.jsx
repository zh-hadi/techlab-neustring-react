import {React, useState} from 'react'
import poweredBy from '../assets/power-by.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ActiveIcon from '../assets/icon-active.svg'
import { useLocation } from 'react-router-dom'

const SideBar = ({handler}) => {
    const [active, setActive] = useState(true);
   

    const linkClass = ({ isActive }) => {
        const baseClass = "font-montserrat font-bold flex gap items-center gap-1 text-[#82BC34]"
        const isActiveClass = "ext-green-500 font-bold "
        const notActiveClass = "font-normal"

        return isActive ? `${baseClass} ${isActiveClass}` : `${baseClass} ${notActiveClass}`
    }

    const shadow = ({isActive}) =>
        isActive ? "h-2 w-2 bg-red-500 ": 'hidden';

    console.log(linkClass)


    const location = useLocation();
    console.log(location.pathname)

  return (
    <div className='w-[300px] flex flex-col justify-between absolute top-0 bottom-0 z-20'>
        <div className='flex flex-col justify-center flex-1 gap-2'> 

            {/* <NavLink>
                hello
            </NavLink> */}
            <NavLink to="/home" className={linkClass}> 
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

            <NavLink to="/about" className={linkClass}> 
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

            <NavLink to="/solution" className={linkClass} onClick={handler}> 
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

            <NavLink to="/community" className={linkClass}> 
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

            <NavLink to="/contact" className={linkClass}> 
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
