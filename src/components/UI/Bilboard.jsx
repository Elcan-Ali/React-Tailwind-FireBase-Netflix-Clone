import React, { useEffect, useState } from 'react'

// icons -----
import { BsVolumeMute, BsVolumeUp } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Filter from '../Functional/Filter'
import { useLocation } from 'react-router-dom'

function Bilboard({ url }) {
    const location = useLocation()

    const [volume, setVolume] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`)
            .then(response => response.json())
            .then(data => {
                setData(data.results[Math.floor(Math.random() * data.results.length)]);
            })
    }, [url])

    return (
        <div className='h-[100vh]  z-0'>

            <div className='absolute w-full h-full z-[0] '>
                <div className='absolute bg-gradient-to-r from-black inset-0' ></div>
                <img className='w-full h-full z-[0] h-full object-cover' src={`${process.env.REACT_APP_IMAGE_URL}${data?.backdrop_path}`} alt="poster" />

                {location.pathname === "/tv-shows"  && <Filter page={"Tv Shows"}  />} 
                {location.pathname === "/movies"  && <Filter  page={"Movies"} /> }

                <div className='flex drop-shadow-2xl absolute top-[55%] w-full justify-between items-end pb-[40px]  px-[30px] md:px-[60px]'>
                    <div id='caption' className='w-full md:w-5/12 '>
                        <h2 className='text-4xl lg:text-[46px] leading-tight mb-4 '>{data.original_title || data.original_name}</h2>
                        <h4 className='text-base lg:text-lg mb-4 md:line-clamp-3'>{data.overview}</h4>
                        <div className='flex gap-4 '>
                            <button className='bg-white flex items-center gap-[10px] px-[10px] lg:px-[30px] lg:py-[10px] rounded'>
                                <FaPlay className='text-[18px] md:text-[24px]' fill='#000' />
                                <span className='text-black text-[16px] md:text-[18px] font-semibold'>Play</span>
                            </button>
                            <button className='bg-[#6d6d6eb3] flex items-center gap-[10px] px-[10px]  lg:px-[30px] py-[5px] lg:py-[10px] rounded' >
                                <AiOutlineInfoCircle className='text-[20px] md:text-[24px]' />
                                <span className='text-[16px] md:text-[18px] font-semibold'>More Info</span>
                            </button>
                        </div>
                    </div>

                    <div className='hidden md:flex items-center absolute right-0 gap-[1.1vw]'>
                        <div className='border  rounded-full p-[7px]' onClick={() => { setVolume(!volume) }}>
                            {volume && <BsVolumeUp size={24} />}
                            {!volume && <BsVolumeMute size={24} />}
                        </div>
                        <div className='bg-gray-500 w-[90px] border-s py-[5px] px-[10px] border-white'>
                            {data.adult ? "18+" : "7+"}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bilboard