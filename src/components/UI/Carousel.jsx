import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react'
import { TfiAngleDoubleRight, TfiAngleDoubleLeft } from 'react-icons/tfi';

function Carousel({ category, url }) {
    const [data, setData] = useState([])
    const Slider = useRef()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`)
            .then(response => response.json())
            .then(data => { setData(data.results); console.log(data) })
    }, [url])


    const slide = (dir) => {
        const direction = dir ? 760 : -760
        Slider.current.scrollLeft += direction
    }

    return (
        <div className='carousel-box pl-[60px]'>
            <h3 className='py-3 text-[22px]'>{category}</h3>
            <div className='relative group'>
                <div ref={Slider} className='carousel cursor-grab flex gap-3 w-full  overflow-x-scroll  scroll-smooth '>
                    {data.map(item => <div className='w-[270px]   shrink-0' key={nanoid()}>
                        <img className='w-full rounded  object-cover' src={`${process.env.REACT_APP_IMAGE_URL}${item.backdrop_path}`} alt="carousel-img" />
                    </div>)}
                </div>
                <div onClick={() => slide(false)} className='hover:bg-[hsla(0,0%,8%,.7)] px-5 absolute flex items-center top-0 bottom-0'>
                    <TfiAngleDoubleLeft className='opacity-0 drop-shadow-2xl group-hover:opacity-100' size={24} />
                </div>
                <div onClick={() => slide(true)} className='hover:bg-[hsla(0,0%,8%,.7)] px-5 absolute flex items-center top-0 bottom-0  right-0'>
                    <TfiAngleDoubleRight className='opacity-0 drop-shadow-2xl group-hover:opacity-100 drop' size={24} />
                </div>
            </div>
        </div>
    )
}

export default Carousel