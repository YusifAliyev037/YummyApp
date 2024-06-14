import React from 'react'
import { BsCameraVideo } from 'react-icons/bs'
import { IoIosMore } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiUserAddLine } from "react-icons/ri";
import Messages from './Messages';


function Chat() {
  return (
    <div className='mt-20 flex-2'>
    <div className=" h-12 bg-gray20 flex items-center w-[900px] p-4 gap-[800px] content-between p-2 text-white">
      <span className='userninfo' >
        <img className=' w-12 h-12 p-1 object-cover rounded-50' width={40} height={40} src='/user.png' alt="" />
      
    <span></span>
    </span>
      <div className="chaticons">
          <BsCameraVideo cursor="pointer" />
          <RiUserAddLine cursor="pointer" />
          <IoIosMore cursor="pointer" />
      </div>
    </div>
      <Messages/>
      {/* <InputMessage /> */}
  </div>
  )
}

export default Chat