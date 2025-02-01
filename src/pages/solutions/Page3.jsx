import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import PlanBlob from '../../components/blob/PlanBlob';

import { useDataContext } from '../../contexts/DataContext';
import { StaticCopyUsage } from 'three';
import { div } from 'framer-motion/client';

const Page3 = () => {

    const staticData = {
        plan: 'Planning',
        title: 'Laying the Groundwork for Success',
        description: 'Efficient planning is the cornerstone of successful wholesale roaming financial management. NeuString Analytics provides the tools to streamline your planning process and set the stage for optimal performance.',
        image: '',
        service: ['Forecasting', 'Financial Targets', 'Business Case']
    };



    const apidata = useDataContext();
    
    const data = apidata?.apiData?.data?.solutionPage?.page3 || staticData
    // const data = staticData

    // console.log(data)


  return (
    <div className='w-full md:w-4/5    mx-auto flex flex-col md:flex-row justify-between  relative pb-10 mb:pb-0' >


          <motion.div 
             className='flex-1 flex flex-col gap-5 items-start z-10'
           
             initial={{ opacity: 0, x: -300 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
           >
             <div className='w-full md:w-2/3 mx-auto flex flex-col gap-5 items-start'>
               <img className='size-24' src={PlaneIcon} alt="" />
               <h2 className='text-[#2870AE] text-2xl md:text-5xl font-bold'>{data.title}</h2>
               <p className='text-[#2870AE] text-sm md:text-base'>{data.description}</p>
             </div>
     
           </motion.div>
     
           <motion.div 
             className='w-full md:w-[200px] h-full space-y-5 order-first md:order-none z-0'
            
             initial={{ opacity: 0, y: 600 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: .7 }}
           >
               <div className='relative w-[120px] h-[120px] mx-auto mb-5 md:mb-0'>
                 <div className="w-[120px] h-[120px] border-[20px] border-[#44A8FF] rounded-full relative">
         
                 </div>
                 <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#2870AE] text-3xl font-bold bg-white py-2 px-4 rounded-md'>
                   {data.plan}
                 </div>
               </div>
     
               <div
                   className="w-[6px] h-[400px] mx-auto hidden md:block"
                   style={{
                     background: 'linear-gradient(180deg, #7F7FD5 0%, rgba(134, 168, 231, 0.5) 50%, rgba(145, 234, 228, 0) 100%)'
                   }}
                 ></div>
           </motion.div>

      <motion.div 
        className='flex-1'
       
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='relative pt-0 md:pt-20'>
            <div className='flex justify-center items-center'>
                <PlanBlob />
            </div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col p-5 md:p-10 justify-between w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
              // style={{ width: '428px', height: '405px' }}
            >

              {data.service.map((item, index) => (
                <div 
                  key={index}
                  className={ `text-white px-3 py-1 rounded-md text-sm md:text-3xl ${index % 2=== 0 ? ' self-start': ' self-end'}`}
                  style={{ 
                    background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                  }}
                >
                  {item}
                </div>
                 
              ))}


              {/* <div 
                className="text-white px-3 py-1 rounded-md text-sm md:text-3xl self-end" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Financial Targets
              </div>
              <div 
                className="text-white px-3 py-1 rounded-md text-sm md:text-3xl self-start" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Business Case
              </div> */}
          
            </div>
        </div>
        
      </motion.div>

      


    </div>
  )
}

export default Page3