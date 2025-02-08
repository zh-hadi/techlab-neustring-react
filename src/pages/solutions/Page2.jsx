import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import SolutionIcon1 from '../../assets/solutionIcon1.svg'
import SolutionIcon2 from '../../assets/solutionIcon2.svg'
import SolutionIcon3 from '../../assets/solutionIcon3.svg'
import vectorline from '../../assets/vectorline.svg'

import { useDataContext } from '../../contexts/DataContext';

const pageVariants = {
    initial: { y: "-100%", opacity: 0 }, 
    animate: { 
        y: ['105%', "-5%", 0], 
        opacity: 1 
      },
      exit: { y: "-100%", opacity: 0 },
};
  
  

const Page2 = () => {

    const staticData = [
       
                {
                    title: 'Co-Pilot Intelligence',
                    description: 'Efficient planning is the cornerstone of successful wholesale roaming financial management. NeuString Analytics provides the tools to streamline your planning process and set the stage for optimal performance.',
                    image: ''
                },
                {
                    title: 'QuickSight Intelligence',
                    description: 'Your intelligent assistant, streamlining wholesale roaming. Co-Pilot automates tasks, provides insights, and optimizes your operations.',
                    image: ''
                },
                {
                    title: 'Secure Collaboration',
                    description: 'Secure, private collaboration at your fingertips. Share insights, make decisions, and drive results, all in a secure environment.',
                    image: ''
                }
            
    ];

    const solutionIcons = [SolutionIcon1, SolutionIcon2, SolutionIcon3];


    const apidata = useDataContext();
    const page2Data = apidata?.apiData?.data?.solutionPage?.page2.content;
    
    const data = page2Data || staticData


  return (
    <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 2, ease: "easeInOut" }}
        className='w-full md:w-4/5 mx-auto md:h-full flex justify-between items-center pb-10 mb:pb-0'>


        <div className='w-full space-y-10  z-30'>
            <h2 className='text-[#2870AE] text-3xl md:text-5xl text-center font-bold'>Your Boarding Pass to Efficiency</h2>
            <div className='flex flex-col gap-5 w-full md:w-4/5 mx-auto'>
                {data.map((item, index)=> (
                <div key={item.title} className={` w-full md:w-2/3 p-3 bg-white bg-opacity-30 rounded-md flex flex-col md:flex-row gap-5 ${index % 2 === 0 ? 'self-center md:self-start': 'self-center md:self-end'}`}>
                    <div className='mx-auto md:mx-0'><img className='w-[120px] h-[120px]' src={solutionIcons[index%3]} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#2870AE] font-bold text-xl'>{item.title}</h2>
                        <p className='text-[#2870AE] text-sm'>{item.description}</p>
                    </div>
                </div>

                ))}
            </div>
        </div>


        {/* <div 
            className='w-[50px] h-full absolute -top-20 left-1/2 opacity-50 z-5 bg-red-500' 
            style={{background: 'linear-gradient(180deg, #7F7FD5 0%, rgba(134, 168, 231, 0.5) 50%, rgba(145, 234, 228, 0) 100%)'}}
            >
                
        </div> */}


        <div className='hidden md:block w-[150px] mt-20 h-full  absolute top-0 left-1/2 -translate-x-1/2 z-5'>
            <img className='h-full z-1' src={ vectorline } alt="" />
        </div>

    

    </motion.div>
  )
}

export default Page2