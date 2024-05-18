import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black bg-opacity-75 backdrop-blur-xl flex justify-between items-center text-center py-12 px-20'>
        <div>
            <ul>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>About</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Services</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Creater</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Delivery</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>About</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Services</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Creater</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Delivery</li>
            </ul>
        </div>
        <div>
            344, New Delhi<br/>
            Phone:- 234322<br/>
            Email:- email@gmail.com
        </div>
    </div>
  )
}

export default Footer