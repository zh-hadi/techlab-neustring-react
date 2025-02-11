import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import GitHubGlobe from '../../components/GitHubGlobe';
import mouseIcon from '../../assets/mouse-icon.svg';
import mapearth from '../../assets/map-earth.png';
// import Globe from 'react-globe.gl';
import svgline from '../../assets/svgline.svg';


import { useDataContext } from '../../contexts/DataContext';


import Globe from '../../components/Globe';


const Page1 = () => {

    let staticData = {
        title: 'Efficiency, Delivered',
        description: 'NeuString is your one-stop solution for streamlined wholesale roaming. Our platform integrates seamlessly with your existing workflows, optimizing every step of the journey, from planning to closure.',
        image: '',
    };

    const apidata = useDataContext();
    
    const data = apidata?.apiData?.data?.solutionPage?.page1 || staticData
    

  return (

    <>
      <div className='w-full md:w-4/5   md:h-full mx-auto flex flex-col md:flex-row  md:justify-between justify-stretch items-center pb-10 mb:pb-0'>


        <motion.div 
          className='flex-1 flex flex-col gap-5  md:items-start'
        
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className='w-full md:w-2/3 mx-auto flex flex-col gap-5 items-start p-2'>
    
            <h2 className='text-white text-3xl xl:text-7xl font-bold'>{data.title}</h2>
            <p className='text-white text-base'>{data.description}</p>
          </div>

        </motion.div>


        <motion.div 
          className='flex-1 '
        
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className='w-full h-[300px] md:h-[600px] '>
          <Globe
            // globeImageUrl="{mapearth}"
            // // globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
  />
            {/* <GitHubGlobe color="red"/> */}
            {/* <ReactGlobe /> */}
          </div>

          <div className='absolute bottom-0 left-1/2 -translate-x-1/2  h-[100px] p-5 flex items-center justify-center'>

            <img className='pt-20' src={svgline} alt="" />
          </div>
        
          
        </motion.div>

        <div className='md:hidden absolute bottom-0 left-1/2 -translate-x-1/2  flex flex-col items-center '>
            <img src={mouseIcon} alt="" />
            <div className='text-white'>Scroll to view more</div>
        </div> 

      </div>
    </>

    
  )
}

export default Page1