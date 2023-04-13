import React from 'react'
import { RiMenu2Line } from "react-icons/ri"
import { GoTriangleDown } from "react-icons/go"
import { MdWindow } from "react-icons/md"


function Filter({page}) {
    return (
        <div className="absolute top-[10.3%] flex px-[30px] w-full items-center md:px-[60px] justify-between">
            <div className='flex items-center gap-[45px]'>
                <h3 className='text-[38px] font-medium'>{page}</h3>
                <div className='border  text-[14px] px-[10px] py-[3.4px] flex items-center gap-7'>
                    <span className='font-semibold'>Genres</span>
                    <GoTriangleDown />
                </div>
            </div>

            <div className='flex items-center' >
                <div className='border py-[5px] px-[14px]' ><RiMenu2Line size={15} /></div>
                <div className='border py-[5px] px-[14px]'><MdWindow size={15} /></div>
            </div>
        </div>
    )
}

export default Filter