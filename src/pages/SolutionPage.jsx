import React from 'react'
import { useContext, useEffect } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'
import '../animation.css'

const SolutionPage = () => {

  const {setColor} = useContext(ColorContext)
  const location = useLocation();
  
    useEffect(() => {
  
      setColor(['linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)', 'style']);
  
    }, [setColor, location])



  return (


    <div className='h-screen w-full flex '>

      <div className='flex-1'></div>
      
      <div className='flex-1 w-[400px] h-[400px] hover:translate-x-6  duration-300 hover:scale-110'>


        <div className="relative w-full h-full">
  
      <div class="blob"></div>
    </div>
      </div>
       
      </div>



      

  )
}

export default SolutionPage
