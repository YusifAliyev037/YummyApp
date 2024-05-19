import Image from "next/image";
import React from "react";
interface Props {
  imgRef?: any;
  onChange?: any;
}
export const ImageInput = ({ imgRef, onChange }: Props) => {
  return (
    <div className=" bg-darkBlue_5 h-full  flex rounded-2xl items-center justify-center cursor-pointer ">
      <div className=" flex-col  relative">
        <input
          onChange={onChange}
          ref={imgRef}
          type="file"
          accept="image/*"
          className=" absolute  opacity-0 w-full h-full cursor-pointer"
        />
        <Image
          alt="upload-image"
          width={60}
          height={60}
          src="/upload.svg"
        />
        <p className=" text-gray10  font-medium text-lg ">Upload</p>
      </div>
    </div>
  );
};