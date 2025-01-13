import React from 'react'
import { useContext, useEffect } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'

const SolutionPage = () => {

  const {setColor} = useContext(ColorContext)
  const location = useLocation();
  
    useEffect(() => {
  
      setColor(['linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)', 'style']);
  
    }, [setColor, location])



  return (
    <div>
      
    </div>
  )
}

export default SolutionPage
