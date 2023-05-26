import React from 'react'
import logo from '../assets/Medx_logo.png'
import { Link } from 'react-router-dom'
import { BsChevronLeft, BsChevronDown } from 'react-icons/bs'

export default function Scan() {
  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <div className='w-full'>
          <img src={logo} alt="MEDx-logo" className='mt-[20px] mb-[200px]' />

          <h2 className='font-bold text-[50px] leading-[1.44] text-dark font-Axiforma'>Scan to Verify your <br/> COVID-19 Vaccination</h2>
          <p className='text-2xl font-normal text-dark font-Axiforma'>Place your QR code within the frame</p>
          <p className='mt-[400px] mb-2 text-sm text-dark font-Axiforma font-medium'>Copyright© 2023 MEDx eHealthCenter B.V. All Rights Reserved.</p>
        </div>
        <div className='w-full ml-[30px]'>
          <div className='mt-9 text-right flex items-center justify-end'>
            <Link to="/" className='text-lg font-medium text-dark font-Axiforma flex items-center gap-2 
            hover:text-brandGreen'> 
              <BsChevronLeft className='text-lg'/>Home
            </Link>
          </div>

          <div className='w-full mt-[30px] flex items-center justify-between'>
            <button className='px-3 py-2 bg-[#d9d8d8] rounded-[10px] text-dark shadow-md 
            font-medium text-lg font-Axiforma flex items-center gap-4' disabled>
              Select Camera <BsChevronDown className='text-lg'/>
            </button>

            <button className='px-3 py-2 rounded-[10px] bg-[#5c61d7] text-white shadow-md 
            font-medium text-lg font-Axiforma hover:bg-[#494ca7] transition duration-150 ease-in-out 
            hover:shadow-lg active:bg-[#3e408d] active:shadow-xl'>Activate Camera</button>
          </div>
        </div>
      </div>
    </>
  )
}
