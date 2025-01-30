import { useState } from 'react';
import { motion } from 'framer-motion';
import PlaneIcon from '../../assets/planning-icon.svg';
import Bg_image from '../../assets/page_7_bg.svg';
import Bg_logo from '../../assets/page_7_logo.svg';

import { useDataContext } from '../../contexts/DataContext';

const pageVariants = {
    initial: { y: "-100%", opacity: 0 }, 
    animate: { 
        y: ['105%', "-5%", 0], 
        opacity: 1 
    },
    exit: { y: "-100%", opacity: 0 },
};

const Page7 = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyEmail: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const apidata = useDataContext();
    const staticData = {
        title: 'Elevate Your Wholesale Roaming with NeuString Analytics',
        description: 'NeuString Analytics offers a holistic approach to wholesale roaming management. By streamlining processes, automating tasks, and providing actionable insights, we empower MNOs to optimize their operations, reduce costs, and enhance revenue.'
    };

    const data = apidata?.apiData?.data?.solutionPage?.page6 || staticData;

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('http://localhost:8000/api/demobook', { // Replace with your actual API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess("Info submitted successfully!");
                setFormData({ companyName: '', companyEmail: '' }); // Reset form
            } else {
                setError(result.message || "Something went wrong.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={pageVariants}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='w-full md:w-4/5 h-full mx-auto flex justify-between z-10 pb-20 mb:pb-0'
            >
                <div className='px-10 pt-5 pb-20 md:pb-0 md:pt-20 mx-auto text-center flex flex-col gap-5'>
                    <h2 className='text-[#2870AE] text-3xl md:text-6xl font-bold'>{data.title}</h2>
                    <p className='text-[#2870AE] text-sm md:text-base'>{data.description}</p>
                    
                    <div className='w-full flex justify-center'>
                        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-3 items-center'>
                            <input 
                                className='p-2 border border-[#ADD24F99] rounded-md'
                                type="text"
                                name="companyName"
                                placeholder='Company Name'
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                            <input 
                                className='p-2 border border-[#ADD24F99] rounded-md'
                                type="email"
                                name="companyEmail"
                                placeholder='Company Email'
                                value={formData.companyEmail}
                                onChange={handleChange}
                                required
                            />
                            <button 
                                type="submit"
                                className='bg-gradient-to-r from-[#0E2C46] to-[#2870AE] p-2 text-white rounded-md'
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Book a Demo"}
                            </button>
                        </form>
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && <p className="text-green-500 mt-2">{success}</p>}
                </div>
            </motion.div>

            <div 
                className='hidden md:block w-[6px] h-[150px] absolute top-0 left-1/2 -translate-x-1/2 opacity-50 z-5' 
                style={{background: 'linear-gradient(180deg, #D6AE7B 0%, rgba(234, 205, 163, 0) 100%)'}}
            >
            </div>

            <img className='hidden md:block md:absolute bottom-0 left-0 right-0 w-full z-0' src={Bg_image} alt="" />
            <img className='hidden md:block md:absolute bottom-0 left-1/2 -translate-x-1/2 z-5' src={Bg_logo} alt="" />
        </>
    );
};

export default Page7;
