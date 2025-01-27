import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import PlanBlob from '../../components/blob/PlanBlob';

const Page3 = () => {

    const data = {
        plan: 'Planning',
        title: 'Laying the Groundwork for Success',
        description: 'Efficient planning is the cornerstone of successful wholesale roaming financial management. NeuString Analytics provides the tools to streamline your planning process and set the stage for optimal performance.',
        image: '',
        service: ['Forecasting', 'Financial Targets', 'Business Case']
    };


  return (
    <div className='w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-between content-container relative'>


     <motion.div 
             className='flex-1 flex flex-col gap-5 items-start z-10'
           
             initial={{ opacity: 0, x: -300 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
           >
             <div className='w-2/3 mx-auto flex flex-col gap-5 items-start'>
               <img className='size-24' src={PlaneIcon} alt="" />
               <h2 className='text-[#2870AE] text-5xl font-bold'>{data.title}</h2>
               <p className='text-[#2870AE] text-base'>{data.description}</p>
             </div>
     
           </motion.div>
     
           <motion.div 
             className='w-[200px] h-full space-y-5 order-first md:order-none z-0'
            
             initial={{ opacity: 0, y: 600 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: .7 }}
           >
               <div className='relative w-[120px] h-[120px] mx-auto'>
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
        <div className='relative w-full h-full'>
            <div className='flex justify-center items-center w-full h-full'>
            <PlanBlob />
            </div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col p-10 justify-between "
              style={{ width: '428px', height: '405px' }}
            >
              <div 
                className="text-white px-3 py-1 rounded-md text-3xl self-start" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Forecasting
              </div>
              <div 
                className="text-white px-3 py-1 rounded-md text-3xl self-end" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Financial Targets
              </div>
              <div 
                className="text-white px-3 py-1 rounded-md text-3xl self-start" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Business Case
              </div>
          
            </div>
        </div>
        
      </motion.div>


    </div>
  )
}

export default Page3