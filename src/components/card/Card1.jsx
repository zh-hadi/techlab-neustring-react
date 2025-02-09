import React from 'react'
import Image1 from '../../assets/card_com_1.png';
import LocationIcon from '../../assets/location-icon.svg'

const Card1 = ({data}) => {
  return (
    <div>
        <div 
            className='w-full rounded-3xl h-[572px] p-5 md:p-10 flex flex-col justify-between bg-transparent' 
            style={{
                background: `linear-gradient(90deg, rgba(211, 149, 155, .9) 0%, rgba(191, 230, 186, .7) 100%), url(${Image1})`,
                backgroundSize: 'cover', // Change to 'contain' for testing
                backgroundPosition: 'center',
                backgroundColor: 'lightgray', // Fallback color if image fails
              }}
        >
            <div>
                <div className='text-xl font-bold card_1_color flex gap-2 items-center'>
                    <div className=''>
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                            </svg> */}
                            {/* <img className='text-red-500' src={LocationIcon} alt="" /> */}
                            <svg width="19"  height="28" viewBox="0 0 19 28" style={{ fill: 'rgba(27, 79, 138, 1)'}} xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 13.3C8.60016 13.3 7.73717 12.9313 7.10089 12.2749C6.4646 11.6185 6.10714 10.7283 6.10714 9.8C6.10714 8.87174 6.4646 7.9815 7.10089 7.32513C7.73717 6.66875 8.60016 6.3 9.5 6.3C10.3998 6.3 11.2628 6.66875 11.8991 7.32513C12.5354 7.9815 12.8929 8.87174 12.8929 9.8C12.8929 10.2596 12.8051 10.7148 12.6346 11.1394C12.4641 11.564 12.2142 11.9499 11.8991 12.2749C11.5841 12.5999 11.21 12.8577 10.7984 13.0336C10.3868 13.2095 9.94556 13.3 9.5 13.3ZM9.5 0C6.98044 0 4.56408 1.0325 2.78249 2.87035C1.00089 4.70821 0 7.20088 0 9.8C0 17.15 9.5 28 9.5 28C9.5 28 19 17.15 19 9.8C19 7.20088 17.9991 4.70821 16.2175 2.87035C14.4359 1.0325 12.0196 0 9.5 0Z" fill=""/>
                            </svg>

                    </div>
                    <span>{data.location}</span>
                </div>
            </div>
            <div className='flex flex-col justify-start gap-5'>
                <h2 className='text-4xl font-bold card_1_color'>{data.title}</h2>
                <p className='card_1_color text-xl'>{data.description}</p>
                <div>

                <a className='card_1_color px-3 py-2 rounded-md text-sm self-stretch font-semibold' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}} href={data.url}>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card1