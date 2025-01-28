import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import ExecutingBlob from '../../components/blob/ExecutingBlob';

const Page4 = () => {

    const data = {
        plan: 'Executing',
        title: 'Executing Your Roaming Financial Strategy',
        description: 'Once your strategy and financial targets are in place, the next crucial step is execution. Deals are the lifeblood of your wholesale roaming business, and NeuString Analytics provides a comprehensive solution to streamline your deal management process.',
        image: '',
        service: ['Deal Business Cases', 'Approvals', 'Negotiations', 'Contracting', 'Implementing']
    };


  return (

    <>
    <div className='w-full md:w-4/5    mx-auto flex flex-col md:flex-row justify-between  relative pb-10 mb:pb-0'>


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
                background: 'linear-gradient(360deg, rgba(255, 209, 148, 0) 0%, #70E1F5 100%)'
              }}
            ></div>
      </motion.div>

      <motion.div 
        className='flex-1'
       
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='relative pt-0 md:pt-20 '>
            <div className='flex justify-center items-center'>
                <ExecutingBlob />
            </div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col p-5 md:p-10 justify-between w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
              // style={{ width: '428px', height: '405px' }}
            >
              <div 
                className="text-white px-3 py-1 rounded-md text-sm md:text-3xl self-start" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Forecasting
              </div>
              <div 
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
              </div>
          
            </div>
        </div>
        
      </motion.div>


    </div>

    <div 
    className='hidden md:block w-[6px] h-[150px]  absolute -top-20 left-1/2 -translate-x-1/2 opacity-50 z-5' 
    style={{background: 'linear-gradient(180deg, #7F7FD5 0%, rgba(134, 168, 231, 0.5) 50%, rgba(145, 234, 228, 0) 100%)'}}
    >

    </div>

    </>
  )
}

export default Page4