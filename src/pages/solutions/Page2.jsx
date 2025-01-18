import {motion} from 'framer-motion'
import PlaneIcon from '../../assets/planning-icon.svg'
import SolutionIcon from '../../assets/solutionIcon.svg'

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
    <div className=' w-4/5 mx-auto flex justify-between items-center'>


        <div className='space-y-10'>
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


    </div>
  )
}

export default Page2