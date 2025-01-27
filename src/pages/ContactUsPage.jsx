
import { useEffect, useContext } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'
import PhoneLogo from '../assets/phone-logo.svg'
import IphoneIcon from '../assets/apple-icon.svg'

const ContactUsPage = () => {
  const {setColor} =  useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {
    setColor(['linear-gradient(90deg, #43C6AC 0%, #F8FFAE 100%)', 'style']);

  },[setColor, location]);


  return (
    <div className='w-3/4 mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <div className=' flex flex-col items-center md:items-end text-center md:text-right gap-5'>
          <h2 className='text-4xl leading-9 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#0F314F]  to-[#226CAC]'>Connect with NeuString</h2>
          <p>Follow us for the latest insights, tips, and industry news.</p>
          <a href="" className='border-2 border-border-gradient  px-4 py-2 rounded-md'>Follow NeuString</a>
          <div 
  className="border-2 border-solid border-transparent bg-clip-border" 
  style={{ borderImage: 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)' }}
>
  hadi
</div>


        </div>
        <div>
          <img className='' src={PhoneLogo} alt="" />
        </div>
        <div className='flex flex-col items-center md:items-end text-center md:text-right gap-5'>
          <h2 className='text-4xl font-bold leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0E2C46]  to-[#226CAC]'>Download Our Mobile App</h2>
          <p>Stay connected on the go</p>
          <a href="">
            <img src={IphoneIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
    )
}

export default ContactUsPage
