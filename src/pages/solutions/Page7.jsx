import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import Bg_image from '../../assets/page_7_bg.svg'
import Bg_logo from '../../assets/page_7_logo.svg'


const pageVariants = {
    initial: { y: "-100%", opacity: 0 }, 
    animate: { 
        y: ['105%', "-5%", 0], 
        opacity: 1 
      },
      exit: { y: "-100%", opacity: 0 },
};

const Page7 = () => {

    const data = {
        title: 'Elevate Your Wholesale Roaming with NeuString Analytics',
        description: 'NeuString Analytics offers a holistic approach to wholesale roaming management. By streamlining processes, automating tasks, and providing actionable insights, we empower MNOs to optimize their operations, reduce costs, and enhance revenue.'
       
    };


  return (
    <>
        <motion.div 
         initial="initial"
         animate="animate"
   
         variants={pageVariants}
         transition={{ duration: 1, ease: "easeInOut" }}
            className='w-ful md:w-4/5 h-full mx-auto flex justify-between z-10 pb-20 mb:pb-0'
            >


            <div className='px-10 pt-5 pb-20 md:pb-0 md:pt-20 mx-auto text-center flex flex-col gap-5'>
                <h2 className='text-[#2870AE] text-3xl md:text-6xl font-bold'>{data.title}</h2>
                <p className='text-[#2870AE] text-sm md:text-base'>{data.description}</p>
                <div className='w-full flex justify-center'>
                    <form action="" className='flex flex-col md:flex-row gap-3 items-center'>
                        <input className='p-2 border border-[#ADD24F99] rounded-md' type="text" placeholder='company name'/>
                        <input className='p-2 border border-[#ADD24F99] rounded-md' type="text" placeholder='company email'/>
                        <button className='bg-gradient-to-r from-[#0E2C46] to-[#2870AE] p-2 text-white rounded-md'>Book a Demo</button>
                    </form>
                </div>
            </div>


        
        </motion.div>
        <div 
            className='hidden md:block w-[6px] h-[150px]  absolute top-0 left-1/2 -translate-x-1/2 opacity-50 z-5' 
            style={{background: 'linear-gradient(180deg, #D6AE7B 0%, rgba(234, 205, 163, 0) 100%)'}}
            >
        </div>

            <img className='hidden md:block md:absolute bottom-0 left-0 right-0  w-full z-0' src={Bg_image } alt="" />
            <img className='hidden md:block md:absolute bottom-0 left-1/2 -translate-x-1/2 z-5' src={Bg_logo} alt="" />
       
  

    </>
    
  )
}

export default Page7