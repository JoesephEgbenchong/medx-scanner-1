import React, { useState } from 'react'
import logo from '../assets/Medx_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsChevronLeft, BsChevronDown} from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'

export default function Failed() {

  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <div className='w-full'>
          <img src={logo} alt="MEDx-logo" className='mt-[20px]' />
        </div>
        <div className='w-full ml-[30px]'>
          <div className='mt-9 text-right flex items-center justify-end'>
            <Link to="/" className='text-lg font-medium text-dark font-Axiforma flex items-center gap-2 
            hover:text-brandGreen'> 
              <BsChevronLeft className='text-lg'/>Home
            </Link>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center items-center justify-center'>
          <MdCancel className='mt-[100px] ml-[550px] text-[150px] text-red-600' />
          <h2 className='text-[48px] font-bold font-Axiforma text-dark'>QR Code Not Recognized</h2>
          <p className='text-[24px] font-medium font-Axiforma text-dark mb-6'>Please ensure you are using the correct QR code.</p>

          <Link to="/new-scan" className='px-10 py-4 mt-11 rounded-[10px] bg-[#5c61d7] text-white shadow-md 
            font-medium text-lg font-Axiforma hover:bg-[#494ca7] transition duration-150 ease-in-out 
            hover:shadow-lg active:bg-[#3e408d] active:shadow-xl'>Rescan or Initiate a new one</Link>
        </div>
      </div>
    </>
  )
}
