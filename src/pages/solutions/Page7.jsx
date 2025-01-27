import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'


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
            className=' w-4/5 h-full mx-auto flex justify-between content-container'
            >


            <div className='px-10 pt-20 mx-auto text-center flex flex-col gap-5'>
                <h2 className='text-[#2870AE] text-6xl font-bold'>{data.title}</h2>
                <p className='text-[#2870AE] text-base'>{data.description}</p>
                <div className='w-full flex justify-center'>
                    <form action="" className='flex gap-3 items-center'>
                        <input className='p-2 border border-[#ADD24F99] rounded-md' type="text" placeholder='company name'/>
                        <input className='p-2 border border-[#ADD24F99] rounded-md' type="text" placeholder='company email'/>
                        <button className='bg-gradient-to-r from-[#0E2C46] to-[#2870AE] p-2 text-white rounded-md'>Book a Demo</button>
                    </form>
                </div>
            </div>


        </motion.div>
        <div 
            className='w-[6px] h-[150px]  absolute -top-20 left-1/2 -translate-x-1/2 opacity-50 z-5' 
            style={{background: 'linear-gradient(180deg, #D6AE7B 0%, rgba(234, 205, 163, 0) 100%)'}}
            >

        </div>
    </>
    
  )
}

export default Page7