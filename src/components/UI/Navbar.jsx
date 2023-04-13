import React from 'react'
import { Link } from 'react-router-dom'


// img -----

import Logo from "../../assets/img/Logonetflix.png"
import User from "../../assets/img/user.png"
import Kids from "../../assets/img/kids.png"

// icons -------------
import { IoSearchOutline } from "react-icons/io5"
import { TbFaceId } from "react-icons/tb"
import { BsFillTriangleFill } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { FaPen } from "react-icons/fa"
import { BsQuestionCircle } from "react-icons/bs"
import { RxTriangleDown} from "react-icons/rx"
import { IoMdNotificationsOutline } from "react-icons/io"



function Navbar() {

    return (
        <nav className='flex justify-between py-[18px] px-[30px] md:px-[60px] items-center'>

            <div className='text-blue-500 flex items-center'>
               <Link to="/"> <img className='h-[30.5px] w-[96px] mr-[25px]' src={Logo} alt="netflix logo" /></Link>
                <ul className='hidden lg:flex'>
                    <li className='ml-[20px]'><Link to="/">Home</Link></li>
                    <li className='ml-[20px]'><Link to="/tv-shows">TV Shows</Link></li>
                    <li className='ml-[20px]'><Link to='/movies'>Movies</Link></li>
                    <li className='ml-[20px]'><Link>Latest</Link></li>
                    <li className='ml-[20px]'><Link>My List </Link></li>
                    <li className='ml-[20px]'><Link>Browse by Languages  </Link></li>
                </ul>
            </div>

            <ul className='flex items-center gap-4'>
                <li><IoSearchOutline fill='#fff' size={24} /></li>
                <li className='hidden lg:block'>Kids</li>
                <li><IoMdNotificationsOutline size={24} /></li>
                <li className='profile flex items-center relative gap-2 group' >
                    <div className='w-[24px] h-[24px]  lg:w-[32px] lg:h-[32px] border rounded'>
                        <img className='w-full object-cover' src={User} alt="userimage" />
                    </div>
                    <RxTriangleDown className='group-hover:rotate-180 transition-all' />

                    <div className='absolute right-[0] top-[32px] w-[180px]  hidden  group-hover:block'>
                        <span className='flex justify-end pt-1 md:pt-3 pr-9'>
                        <BsFillTriangleFill size={10}/>
                        </span>
                        <div className='bg-black border border-white rounded p-[15px]'>
                            <div className='flex items-center gap-2'>
                                <div className='w-[24px] h-[24px]'>
                                    <img className='w-full object-cover' src={Kids} alt="userimage" />
                                </div>
                                <span>
                                   Kids
                                </span>
                            </div>
                            <ul>
                                <li className='py-[8px] flex gap-4 items-center'><FaPen size={16} /> <span>Manage Profiles</span></li>
                                <li className='py-[8px] flex gap-3 items-center'><TbFaceId size={20} /> <span>Profiles</span></li>
                                <li className='py-[8px] flex gap-3 items-center'><BiUser size={20} /> <span>Account</span></li>
                                <li className='py-[8px] pb-[10px] flex gap-4 items-center'><BsQuestionCircle size={16} fill='#fff' />Help Center</li>
                            </ul>
                            <div className='pt-[8px] border-t-2 text-center font-medium text-[14px]'>
                                Sign out of Netflix
                            </div>
                        </div>
                    </div>

                </li>
            </ul>

        </nav>
    )
}

export default Navbar