import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FormRegister, completeLogin } from '../AdminComponents/Services/axios';

function Navbar() {
  const loginState = useSelector((state: RootState) => state.global.chatLogin);
  console.log(loginState);
  const userEmail = loginState?.user?.email
  console.log(userEmail);
  
  
   
    
  return (
    <div className='flex items-center flex-row bg-black200 h-12 p-2 '>
        <span className=' font-bold mx-2'> Yummy Chat</span>
        <div className='flex gap-2 '>
        <Image 
        src="/user.png"
        alt='user'
        height={30}
        width={30}
        className=' rounded-full object-cover bg-blue-100'
        />
        <span>{userEmail}</span>
        </div>
    </div>
  )
}

export default Navbar