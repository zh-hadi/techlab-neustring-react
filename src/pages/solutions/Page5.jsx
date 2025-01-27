import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import TrakingBlob from '../../components/blob/TrakingBlob'

const Page5 = () => {

    const data = {
        plan: 'Tracking',
        title: 'Tracking and Optimizing Your Roaming Financial Performance',
        description: 'Once Even the most meticulously planned and executed strategies can encounter unexpected challenges. To ensure that your wholesale roaming financial operations remain on track, robust tracking and benchmarking are essential.',
        image: '',
        service: ['Commitments', 'Targets', 'Traffic Anomalies', 'Accruals']
    };


  return (
    <div className=' w-4/5 mx-auto flex justify-between items-center content-container'>


      <motion.div 
        className='flex-1 flex flex-col gap-5 items-start'
      
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
        className='w-[200px] h-full space-y-5'
       
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
              className="w-[6px] h-[400px] mx-auto"
              style={{
                background: 'linear-gradient(180deg, #508EEC 0%, rgba(117, 152, 243, 0) 79.17%)'
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
                <TrakingBlob />
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


      <div 
            className='w-[6px] h-[150px]  absolute -top-20 left-1/2 -translate-x-1/2 opacity-50 z-5' 
            style={{background: 'linear-gradient(360deg, rgba(255, 209, 148, 0) 0%, #70E1F5 100%)'}}
            >

        </div>


    </div>
  )
}

export default Page5