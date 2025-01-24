import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import SolutionIcon from '../../assets/solutionIcon.svg'
import vectorline from '../../assets/vectorline.svg'

const pageVariants = {
    initial: { y: "-100%", opacity: 0 }, 
    animate: { 
        y: ['105%', "-5%", 0], 
        opacity: 1 
      },
      exit: { y: "-100%", opacity: 0 },
};
  
  

const Page2 = () => {

    const data = [
        {
            title: 'Your Boarding Pass to Efficiency',
            content: [
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
            ]
        }
    ];


  return (
    <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=' w-4/5 mx-auto h-full flex justify-between items-center'>


        <div className='space-y-10  z-30'>
            <h2 className='text-[#2870AE] text-5xl text-center font-bold'>{data[0].title}</h2>
            <div className='flex flex-col gap-5 w-4/5 mx-auto'>
                {data[0].content.map((item, index)=> (
                <div key={item.title} className={`w-2/3 p-3 bg-white bg-opacity-30 rounded-md flex gap-5 ${index % 2 === 0 ? 'self-start': 'self-end'}`}>
                    <div><img className='w-[120px] h-[120px]' src={SolutionIcon} alt="" /></div>
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


        <div className='w-[150px] mt-20 h-full  absolute top-0 left-1/2 -translate-x-1/2 z-5'>
            <img className='h-full z-1' src={ vectorline } alt="" />
        </div>


        


    </motion.div>
  )
}

export default Page2