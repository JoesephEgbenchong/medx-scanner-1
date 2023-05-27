import React, { useState } from 'react'
import logo from '../assets/Medx_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsChevronLeft, BsChevronDown, BsFillCalendarMonthFill, BsTelephoneFill, BsFillCalendarCheckFill, BsKeyFill} from 'react-icons/bs'
import { MdGppGood } from 'react-icons/md'
import profile from '../assets/patricia_monthe.jpg'
import { FaSyringe } from 'react-icons/fa'
import { HiIdentification } from 'react-icons/hi'

export default function Successful() {

  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <div className='w-full'>
          <img src={logo} alt="MEDx-logo" className='mt-[20px] mb-[150px]' />

          <MdGppGood className='text-[200px] text-[#40a829] ml-[150px]' />
          <h2 className='font-bold text-[50px] leading-[1.44] text-dark font-Axiforma'>Validation Successful !</h2>
          <p className='text-2xl font-normal text-dark font-Axiforma'>Your QR Code matches our records! You’re verified</p>
          <p className='mt-[400px] mb-2 text-sm text-dark font-Axiforma font-medium'>Copyright© 2023 MEDx eHealthCenter B.V. All Rights Reserved.</p>
        </div>
        <div className='w-full ml-[30px]'>
          <div className='mt-9 text-right flex items-center justify-end'>
            <Link to="/" className='text-lg font-medium text-dark font-Axiforma flex items-center gap-2 
            hover:text-brandGreen'> 
              <BsChevronLeft className='text-lg'/>Home
            </Link>
          </div>

          <div className='w-full mt-[30px] flex items-center gap-[30px]'>
            <img src={profile} alt="profile picture" className='rounded-full border-[3px] border-[#40a829]' />
            <div>
              <h1 className='font-bold text-4xl text-dark font-Axiforma'>Particia <span className='uppercase'>monthé</span></h1>
              <p className='font-medium text-dark text-xl font-Axiforma mt-3'>Founder & CEO MEDX</p>
            </div>
          </div>

          <div className='w-full mt-[50px]'>
            <p className='text-base font-medium font-Axiforma text-[#727272]'>COVID-19 Vaccine Coupon Data</p>

            <div className='mt-[20px] flex items-center gap-5'>
              <p className='text-base font-semibold font-Axiforma 
               bg-brandGreen text-white p-[10px] gap-[10px] rounded-full'>Johnson & Johnson </p>

               <p className='text-base font-semibold font-Axiforma 
               bg-[#3c4bd3] text-white p-[10px] gap-[10px] rounded-full'>Batch #1235</p>

               <p className='text-base font-semibold font-Axiforma 
               bg-[#6327af] text-white p-[10px] gap-[10px] rounded-full'>MEDX Center</p>

               <p className='text-base font-semibold font-Axiforma 
               bg-[#ff972e] text-white p-[10px] gap-[10px] rounded-full'>7 months ago</p>
            </div>
          </div>

          <div className='w-full mt-[50px]'>
            <p className='text-base font-medium font-Axiforma text-[#727272]'>Additional Data</p>

            <div className='mt-3 flex flex-col gap-5 mb-5'>
              <div className='flex items-center gap-5'>
                <BsFillCalendarMonthFill className='text-[40px] text-dark' />
                <p className='text-base font-medium font-Axiforma text-dark'>Date of Birth:</p>
                <p className='text-base font-medium font-Axiforma text-dark'>14/04/1983</p>
              </div>

              <div className='flex items-center gap-5'>
                <BsTelephoneFill className='text-[40px] text-dark' />
                <p className='text-base font-medium font-Axiforma text-dark'>Phone Number:</p>
                <p className='text-base font-medium font-Axiforma text-dark'>0014XXXXXX</p>
              </div>

              <div className='flex items-center gap-5'>
                <BsFillCalendarCheckFill className='text-[40px] text-dark' />
                <p className='text-base font-medium font-Axiforma text-dark'>Vaccination Date:</p>
                <p className='text-base font-medium font-Axiforma text-dark'>12/05/2023</p>
              </div>

              <div className='flex items-center gap-5'>
                <FaSyringe className='text-[40px] text-dark' />
                <p className='text-base font-medium font-Axiforma text-dark'>Number of Doses:</p>
                <p className='text-base font-medium font-Axiforma text-dark'>02</p>
              </div>

              <div className='flex items-center gap-5'>
                <BsKeyFill className='text-[40px] text-dark' />
                <p className='text-base font-medium font-Axiforma text-dark'>Public Key:</p>
                <p className='text-base font-medium font-Axiforma text-dark'>1A9 . PCF . PW</p>
              </div>

              <div className='flex items-center gap-5'>
                <HiIdentification className='text-[40px] text-dark' />
                <p className='text-base font-medium font-Axiforma text-dark'>Certificate ID:</p>
                <p className='text-base font-medium font-Axiforma text-dark'>1523XXXXXXXXX</p>
              </div>
            </div>

            <div className="my-4 mt-5 mb-5 before:border-t-2 flex before:flex-1 items-center before:border-gray-500 
            after:border-b-2 after:flex-1 after:border-gray-500">
            </div>
            <div className='mb-10 w-full'>
            <Link to="/new-scan" className='px-[100px] py-4 mt-11 rounded-[10px] bg-[#5c61d7] text-white shadow-md 
            font-medium text-lg font-Axiforma hover:bg-[#494ca7] transition duration-150 ease-in-out 
            hover:shadow-lg active:bg-[#3e408d] active:shadow-xl ml-[100px]'>Initiate a new Scan</Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  )
}
