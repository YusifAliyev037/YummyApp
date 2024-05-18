import React from 'react'

function AddCategoryInput() {



  return (
    <div className="bg-[#43445A] w-[60%] rounded-xl flex flex-col max-h-[400px]">
    <div className="p-[23px] flex flex-col gap-[8px]">
      <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
        Name
      </p>
      <input 
        className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]" 
        placeholder=" Sea Food" 
      />
       <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
        Slug
      </p>
      <input 
        className="bg-[#5A5B70] border-none rounded-[18px] h-12 p-2 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]" 
        placeholder="Add slug for category" 
      />
    </div>
  </div>
  )
}

export default AddCategoryInput