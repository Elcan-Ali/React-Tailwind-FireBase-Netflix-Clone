import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/UI/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/UI/Footer'

function MainLayout() {

    const initial = "bg-gradient-to-b from-gray-950 to-transparent"
    const afterScroll = "bg-gray-950"
    const header = useRef()
    const [bgHead, setBgHead] = useState(initial)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) { setBgHead(afterScroll) }
            else { setBgHead(initial) }
        })
    }, [bgHead])

    return (<>

        <header ref={header} className={`fixed top-[0px] w-full z-10 ${bgHead}`}>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    )
}

export default MainLayout