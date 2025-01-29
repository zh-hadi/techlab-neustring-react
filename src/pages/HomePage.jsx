import React, { useContext, useEffect } from 'react';
import mouseIcon from '../assets/mouse-icon.svg';
import { ColorContext } from '../App';
import { useLocation } from 'react-router-dom';
import { useDataContext } from '../contexts/DataContext';



const HomePage = () => {

  let staticData = {
    title :  'Transforming Telecom Analytics with NeuString',
    description : 'Experience the future of telecom with NeuString. Harness the power of Co-Pilot Intelligence to automate tasks, QuickSight Insights to visualize critical data, and Secure Collaboration to empower teams.',
    link : '#'
  };
  

  const { color, setColor } = useContext(ColorContext);
  const location = useLocation();
  

  useEffect(() => {

    
    setColor( ['red', 'video']);  

  }, [setColor, location]);



  // data fetch

  const apidata = useDataContext();
  const data = apidata?.apiData?.data?.homePage || staticData
  // if(Object.keys(apidata.apiData).length){
  //   data = apidata.apiData.data.homePage
  // }


  return (
    <div className='w-full flex  flex-col   items-center content-container' id='home-page'>
      <div className='flex flex-col justify-start md:justify-center items-center md:w-3/5 gap-5 flex-1'>
            <h1 className='text-3xl md:text-7xl  tracking-wide font-bold text-white text-center'>{ data.title }</h1>
            <p className='text-white opacity-50 text-center text-base'>{ data.description }</p>
            <a href={data.link} className='border border-[#82BC34] rounded-2xl px-5 py-2 text-white'>Learn more</a>
        <div className='flex flex-col items-center mt-[100px] md:mt-[200px]'>
              <img src={mouseIcon} alt="" />
              <div className='text-white'>Scroll to view more</div>
        </div>
      </div>


    </div>
  )
}

export default HomePage
