import React from 'react'
import logo from '../assets/logo.png'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import { ColorContext } from '../App'
import { useContext } from 'react'
import HeroImage from '../assets/hero2.png';

const Layout = ({children}) => {


  const { color, setColor } = useContext(ColorContext);

  const backgroundStyle = 'linear-gradient(to right, purple 50%, yellow 50%)';

  console.log(color[color.length - 1]);



  return (
    <div
      className={`${color[color.length - 1] === 'class' ? color[0] : ''} h-screen w-full flex flex-col p-5`}
      style={
        color[color.length - 1] === 'style'
          ? { background: color[0] }
          : {
              backgroundImage: `url(${HeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
      }
    >
  


<div className="px-5 py-2 bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] w-3/5 mx-auto flex items-center justify-between rounded-lg">
  <a href="">
    <img className='w-[200px]' src={logo} alt="Logo" />
  </a>
  <a href="" className='text-white px-4 py-1 border-white rounded-md text-md border'>Linkedin</a>
</div>

 
      <div className=' w-full h-full p-10 flex relative '>
            <SideBar />
            <Outlet />
        <div>

        </div>
      </div>


    </div>
  )
}

export default Layout
