import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='bg-black text-gray-400 h-100 max-w-1200 mx-auto flex justify-between items-center'>
        <div className='primary-color font-semibold m-2'>{dateTime.toLocaleString()}</div>

        <h1 className='text-3xl font-bold primary-color m-1'>John Adrian Llanita</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'><a href='#about'>About</a></li>
            <li className='p-5'><a href='#project'>Projects</a></li>
            <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed h-full left-0 top-0 w-60 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='primary-color text-2xl font-extrabold m-4'>Adrian Llanita</h1>
            <ul className='p-8 text-2x1'>
                <li className='p-2'><a href='#about'>About</a></li>
                <li className='p-2'><a href='#project'>Projects</a></li>
                <li className='p-2'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar
