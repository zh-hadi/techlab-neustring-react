import {React, useState} from 'react'
import poweredBy from '../assets/power-by.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const [active, setActive] = useState(true);
    const linkClass = ({ isActive }) => 
            isActive ? 'text-green-500 relative font-bold' : ' text-[#82BC34]';

    const shadow = ({isActive}) =>
        isActive ? "h-2 w-2 bg-red-500": 'hidden';

    console.log(linkClass)

  return (
    <div className='w-[300px] flex flex-col justify-between absolute top-0 bottom-0'>
        <div className='flex flex-col justify-center flex-1 gap-2'> 

            {/* <NavLink>
                hello
            </NavLink> */}
            <NavLink to="/home" className={linkClass}> 
                Home
                <div className={shadow}></div>
            </NavLink>

            <NavLink to="/about" className={linkClass}> 
                About
                <div className={shadow}></div>
            </NavLink>

            <NavLink to="/solution" className={linkClass}> 
                Solutions
                <div className={shadow}></div>
            </NavLink>

            <NavLink to="/community" className={linkClass}> 
            Community
                <div className={shadow}></div>
            </NavLink>

            <NavLink to="/contact" className={linkClass}> 
            Contact Us
                <div className={shadow}></div>
            </NavLink>
           
  
 
        </div>
        <div>
            <h3 className='text-white'>Powered by</h3>
            <img className='bg-slate-800 px-3 py-2 rounded-md' src={poweredBy} alt="" />
        </div>
    </div>
  )
}

export default SideBar
