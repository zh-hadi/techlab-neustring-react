import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';
import PlaneIcon from '../assets/planning-icon.svg'


import SolutionCard from '../components/SolutionCard';

const SolutionPage = () => {

  

  const { setColor } = useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {

    setColor(['linear-gradient(270deg, #C4BDF4 0%, #F0ECF8 100%)', 'style']);

  }, [setColor, location]);



  const cards = [
    {title: "Laying the Groundwork for Success", icon: "aaaaaaaaaaaaa"},
    {title: "techlab 333", icon: "aaaaaaaaaaaaa"},
    {title: "good morning", icon: "aaaaaaaaaaaaa"},
    {title: "hello world", icon: "aaaaaaaaaaaaa"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function handelCard()
  {
    if(currentIndex < cards.length - 1)
    {
      setCurrentIndex(currentIndex + 1);
    }


  }



  return (

    <>

    <SolutionCard title={cards[currentIndex].title} />

    
   <button onClick={handelCard}>Change</button>
    
    </>










  )
}

export default SolutionPage
