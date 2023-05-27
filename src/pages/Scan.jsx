import React, { useState } from 'react'
import logo from '../assets/Medx_logo.png'
import square_bottom_left from '../assets/square-bottom-left.svg';
import square_bottom_right from '../assets/square-bottom-right.svg';
import square_top_left from '../assets/square-top-left.svg';
import square_top_right from '../assets/square-top-right.svg';
import { Link, useNavigate } from 'react-router-dom'
import { BsChevronLeft, BsChevronDown, BsQrCode } from 'react-icons/bs'

export default function Scan() {

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(values =>({...values, [name]: value}))
  }

  const handleSubmit =  (event) => {
    event.preventDefault();
    navigate('/scanning');
  }

  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <div className='w-full'>
          <img src={logo} alt="MEDx-logo" className='mt-[20px] mb-[250px]' />

          <h2 className='font-bold text-[50px] leading-[1.44] text-dark font-Axiforma'>Scan to Verify your <br/> COVID-19 Vaccination</h2>
          <p className='text-2xl font-normal text-dark font-Axiforma'>Place your QR code within the frame</p>
          <p className='mt-[300px] mb-2 text-sm text-dark font-Axiforma font-medium'>Copyright© 2023 MEDx eHealthCenter B.V. All Rights Reserved.</p>
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

          <div className='px-8 py-10 w-full relative mt-10'>
            <img src={square_top_left} alt="" className='absolute top-0 left-[100px]' />
            <img src={square_top_right} alt="" className='absolute top-0 right-[100px]' />
            <img src={square_bottom_left} alt="" className='absolute bottom-0 left-[100px]' />
            <img src={square_bottom_right} alt="" className='absolute bottom-0 right-[100px]' />
            <BsQrCode className='text-[300px] w-full text-dark ' />
          </div>

          <div className="my-4 mt-5 mb-5 before:border-t-2 flex before:flex-1 items-center before:border-gray-500 
            after:border-b-2 after:flex-1 after:border-gray-500">
              <p className="text-center font-Axiforma text-dark text-sm font-semibold mx-4">or enter the code manually</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input className="w-full px-4 py-2 text-lg text-gray-700 rounded-[10px] bg-white 
              border-gray-400 transition ease-in-out mb-6 font-Axiforma" 
              type="text" name="code" 
              value={formData.code || ""} 
              onChange={handleChange} 
              placeholder="cred :type :version :signature :pubkey :payload"/>

            <button className="w-full bg-green-600 text-white px-7 py-3 
              text-sm shadow-md rounded-[10px] uppercase font-medium font-Axiforma 
              hover:bg-green-700 transition duration-150 ease-in-out hover:shadow-lg 
              active:bg-green-900" type="submit">Continue</button>
          </form>
        </div>
      </div>
    </>
  )
}
