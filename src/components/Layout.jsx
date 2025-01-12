import React from 'react'
import logo from '../assets/logo.png'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className='bg-slate-600 h-screen w-full flex flex-col p-5'>

      <div className="px-5 py-2 bg-slate-800   w-3/5 mx-auto flex items-center justify-between rounded-lg">
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
