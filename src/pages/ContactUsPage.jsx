
import { useEffect, useContext } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'
import PhoneLogo from '../assets/phone-image.png'
import IphoneIcon from '../assets/apple-icon.svg'
import PlayStoreIcon from '../assets/play-store.svg'

const ContactUsPage = () => {
  const {setColor} =  useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {
    setColor(['linear-gradient(90deg, #43C6AC 0%, #F8FFAE 100%)', 'style']);

  },[setColor, location]);


  return (
    <div className='w-full md:w-3/5 mx-auto mb-[100px] md:pb-0 '>
      <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <div className=' flex flex-col items-center md:items-end text-center md:text-right gap-5'>
          <h2 className='text-4xl leading-9 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#0F314F]  to-[#226CAC]'>Connect with NeuString</h2>
          <p className='text-[#0F314F] text-base'>Follow us for the latest insights, tips, and industry news.</p>
          
          <div style={{background: 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)'}} className='rounded-2xl' >
            <a href=""  className='flex gap-3 items-center text-left px-[40px] py-4 bg-white m-[2px] rounded-2xl bg-opacity-70'>
                <div className='text-[#103351] text-sm font-semibold'>Follow NeuString</div>
            </a>
          </div>



        </div>
        <div className="w-full max-w-full flex justify-center">
          <img 
            className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]" 
            src={PhoneLogo} 
            alt="Phone Logo" 
          />
        </div>
        <div className='flex flex-col items-center md:items-end text-center md:text-right gap-5'>
          <h2 className='text-4xl leading-9 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#0F314F]  to-[#226CAC]'>Download Our Mobile App</h2>
          <p className='font-base text-[#0F314F]'>Stay connected on the go</p>

          <div style={{background: 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)'}} className='rounded-2xl' >
            <a href=""  className='flex gap-3 items-center text-left px-[40px] py-2 bg-white m-[2px] rounded-2xl bg-opacity-70'>
              <img className='size-6' src={IphoneIcon} alt="" />
              <div>
                <div className='text-[#103351] text-sm font-semibold'>Download on the</div>
                <div className='text-[#103351] text-xl font-semibold'>App Store</div>
              </div>
            </a>
          </div>

          <div style={{background: 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)'}} className='rounded-2xl' >
            <a href=""  className='flex gap-3 text-left items-center px-[40px] py-2 bg-white m-[2px] rounded-2xl bg-opacity-70'>
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
