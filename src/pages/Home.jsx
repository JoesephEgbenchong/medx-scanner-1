import React from 'react'
import logo from '../assets/Medx_logo.png'
import welcomeImage from '../assets/welcome_image.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <div className='max-w-7xl mx-auto flex justify-between'>
            <div className='w-full'>
                <img src={logo} alt="MEDx-logo" className='mt-[20px]' />
                <h1 className='mt-[200px] text-[44px] leading-tight font-bold uppercase text-dark font-Axiforma'>
                    keeping communities safe, one scan at a time</h1>
                <p className='font-medium text-xl font-Axiforma text-brandGreen 
                mb-[80px]'>Let’s ensure a secure environment with QR code verification</p>

                <div>
                    <Link to="/new-scan" className='text-white bg-dark px-7 py-4 border-2 border-dark
                    text-2xl shadow-md font-Axiforma font-medium rounded-[10px] leading-[1.5] cursor-pointer 
                    w-full hover:border-2 transition duration-150 ease-in-out hover:border-dark 
                    hover:text-dark hover:bg-white hover:shadow-lg'>Get Started</Link>

                    <Link to="/" className='text-dark bg-white px-7 py-4 ml-[40px] 
                    text-2xl shadow-md font-Axiforma font-medium rounded-[10px] leading-[1.5] cursor-pointer 
                    w-full border-2 transition duration-150 ease-in-out border-dark 
                    hover:text-white hover:bg-dark hover:shadow-lg'>Contact Us</Link>
                </div>
            </div>
            <div className='w-[100%] ml-[30px]'>
                <img src={welcomeImage} alt="Welcome Image" className='sm:h-screen md:h-auto'/>
            </div>
            
        </div>
    </>
  )
}
