import React from 'react'
import { nanoid } from 'nanoid'
import { BsInstagram, BsYoutube } from "react-icons/bs"
import { ImFacebook } from "react-icons/im"
import { footerLists } from '../../assets/data/category'
function Footer() {


    return (
        <div className='py-[60px] px-[30px] md:p-[60px] flex flex-col text-[13px]  gap-[30px]'>
            <div className='flex gap-[25px] '>
                <ImFacebook size={24} />
                <BsInstagram size={24} />
                <BsYoutube size={24} />
            </div>
            <div className='flex flex-wrap  justify-between md:w-2/3 '>
                {footerLists.map(item => <FooterList key={nanoid()} list={item} />)}
            </div>
            <div className='flex flex-col gap-[20px] '>
                <div>
                    <button className='border p-[7px]'>Service Code</button>
                </div>
                <span className='text-[12px]'>© 1997-2023 Netflix, Inc.</span>
            </div>
        </div>
    )
}

export default Footer



function FooterList({ list }) {
    return (
        <ul className='flex flex-col py-[15px] gap-[5px]  pr-[40px] '>
            {list.map(item => <li key={nanoid()}>{item}</li>)
            }</ul>
    )
}
