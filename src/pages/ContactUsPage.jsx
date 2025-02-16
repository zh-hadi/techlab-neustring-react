
import { useEffect, useContext } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'
import PhoneLogo from '../assets/phone-image.png'
import IphoneIcon from '../assets/apple-icon.svg'
import PlayStoreIcon from '../assets/play-store.svg'

import { useDataContext } from '../contexts/DataContext'
import { useImages } from '../contexts/ImageContext'

const ContactUsPage = () => {

  const Images = useImages();

  const staticData = {
    title_1: 'Connect with NeuString',
    subtitle_1: 'Follow us for the latest insights, tips, and industry news.',
    title_2: 'Download Our Mobile App',
    subtitle_2: 'Stay connected on the go',
    follow_link: '#',
    playStore_url: '#',
    apple_url: '#'
   }

  const {setColor} =  useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {
    setColor(['linear-gradient(90deg, #43C6AC 0%, #F8FFAE 100%)', 'style']);

  },[setColor, location]);



  // fetch data 
   const apidata = useDataContext();
   const data = apidata?.apiData?.data?.contuctPage || staticData;

  // console.log(data);

  return (
    <div className='w-full md:w-2/3 mx-auto  '>
      <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <div className=' flex flex-col items-center md:items-end text-center md:text-right gap-5 py-[50px]'>
          <h2 className='text-4xl leading-9 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#0F314F]  to-[#226CAC]'>{data.title_1}</h2>
          <p className='text-[#0F314F] text-base'>{data.subtitle_1}</p>
          
          <div style={{background: 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)'}} className='rounded-2xl' >
            <a href={data.follow_link} className='flex gap-3 items-center text-left px-[40px] py-4 bg-white m-[2px] rounded-2xl bg-opacity-70'>
                <div className='text-[#103351] text-sm font-semibold'>Follow NeuString</div>
            </a>
          </div>



        </div>
        <div className="w-full max-w-full flex justify-center">
          <img 
            className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]" 
            src={Images.contactPage} 
            alt="Phone Logo" 
          />
        </div>
        <div className='flex flex-col items-center md:items-start text-center md:text-left gap-5 py-[50px]'>
          <h2 className='text-4xl leading-9 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#0F314F]  to-[#226CAC]'>{data.title_2}</h2>
          <p className='font-base text-[#0F314F]'>{data.subtitle_2}</p>

          <div style={{background: 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)'}} className='rounded-2xl' >
            <a href={data.apple_url}  className='flex gap-3 items-center text-left px-[40px] py-2 bg-white m-[2px] rounded-2xl bg-opacity-70'>
              <img className='size-6' src={IphoneIcon} alt="" />
              <div>
                <div className='text-[#103351] text-sm font-semibold'>Download on the</div>
                <div className='text-[#103351] text-xl font-semibold'>App Store</div>
              </div>
            </a>
          </div>

          <div style={{background: 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)'}} className='rounded-2xl' >
            <a href={data.playStore_url}  className='flex gap-3 text-left items-center px-[40px] py-2 bg-white m-[2px] rounded-2xl bg-opacity-70'>
              <img className='size-6' src={PlayStoreIcon} alt="" />
              <div>
                <div className='text-[#103351] text-sm font-semibold'>Download on the</div>
                <div className='text-[#103351] text-xl font-semibold'>App Store</div>
              </div>
            </a>
          </div>


       
        </div>
      </div>
    </div>
    )
}

export default ContactUsPage
