import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import GitHubGlobe from '../../components/GitHubGlobe';
import mouseIcon from '../../assets/mouse-icon.svg';


const Page1 = () => {

    const data = {
        title: 'Efficiency, Delivered',
        description: 'NeuString is your one-stop solution for streamlined wholesale roaming. Our platform integrates seamlessly with your existing workflows, optimizing every step of the journey, from planning to closure.',
        image: '',
    };


  return (

    <>
      <div className=' w-4/5 mx-auto flex justify-between items-center'>


        <motion.div 
          className='flex-1 flex flex-col gap-5 items-start'
        
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='w-2/3 mx-auto flex flex-col gap-5 items-start'>
    
            <h2 className='text-white text-7xl font-bold'>{data.title}</h2>
            <p className='text-white text-base'>{data.description}</p>
          </div>

        </motion.div>


        <motion.div 
          className='flex-1'
        
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className='w-full h-[600px]'>
            <GitHubGlobe color="green"/>
          </div>
          
        </motion.div>


      </div>
      <div className='flex flex-col items-center'>
            <img src={mouseIcon} alt="" />
            <div className='text-white'>Scroll to view more</div>
      </div>
    </>

    
  )
}

export default Page1