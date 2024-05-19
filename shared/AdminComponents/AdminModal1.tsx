import React, { useState } from "react";
import { ImageInput } from "./ImageInput";
import { AdminModalInput } from "./AdminModalInput1";
import { Button } from "./Button";
import Image from "next/image";
// import { ref} from "firebase/storage"



interface Props {
  p?: string;
  p1?: string;
  p2?: string;
  mod?: string;
  btn?: string;
  hidden?: boolean;
  categoryRef?: any;
  ButtonOnClick?: () => void;
  onClickClose?: () => void;
  getImgUrl?: any;
  slugRef?: any;
  imgRef?: any;
 
}

export const AdminModal1 = ({
  p = "Add Product",
  p1 = "Upload your product image",
  p2 = "Add your Product description and necessary information",
  mod = "1",
  btn = "Create Product",
  hidden = true,
  ButtonOnClick,
  onClickClose,
  categoryRef,
  getImgUrl,
  slugRef,
  imgRef,
 
}: Props) => {
  const [imgUrl, setImgUrl] = useState<any>("");

  const [imgOnload, setImgOnload] = useState(false);

  function getİmage(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e?.target?.files?.[0]?.name;
    if (!name) {
      return;
    }


   
  }
  return (
    <div
      className={` fixed  z-10  w-full sm:w-3/4    sm:pl-12 ${
        hidden ? "  -right-full" : "right-0"
      }  transition-all duration-500 top-0 h-screen`}
    >
      <button
        onClick={onClickClose}
        className="   absolute  right-5 sm:left-0  "
      >
        <Image
        className=" bg-pink rounded-full    absolute  right-5 sm:left-0  top-7 w-7 h-7 cursor-pointer"
        
        alt="close-icon" height={10} width={10} src='/close.svg' />
      </button>
      <div className=" bg-darkblue30   flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14  max-h-screen   overflow-y-auto h-screen">
        <div>
          <p className=" text-gray10 font-medium text-2xl  mb-2">{p}</p>
        </div>
        <div className=" flex flex-col   lg:flex-row       w-full   mb-20">
          <div className=" w-full lg:w-1/3 h-38 ">
            <p className=" text-gray10 font-medium  text-lg  tracking-wide">
              {p1}
            </p>
            <img
              ref={imgRef}
              src={`${
                imgOnload ? "loadingImg.webp" : imgUrl ? imgUrl : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }`}
              width={124}
              height={124}
              alt="img"
            />
          </div>
          <div className=" w-full lg:w-2/3  h-38 pt-6 ">
            <ImageInput onChange={getİmage} />
          </div>
        </div>

        <div className="flex   flex-col   lg:flex-row  w-full mb-36">
          <div className="w-full lg:w-1/3">
            <p className=" text-gray10 font-medium  text-lg  tracking-wide">
              {p2}
            </p>
          </div>
          <div className=" w-full lg:w-2/3  pt-5 pl-5  pr-7 pb-7  rounded-2xl bg-darkBlue_5 max-h-[600px] overflow-y-auto ">
           
            {mod === "1" && (
              <div>
                <AdminModalInput useRef={categoryRef} p="Name" />
                <AdminModalInput useRef={slugRef} p="Slug" />
              </div>
            )}
          
          </div>
        </div>

        <div className="flex justify-around  border-t-gray20 border-t-4 pt-6  gap-10">
          <Button
            onClick={onClickClose}
            className=" bg-gray20 text-white py-3 w-1/2 rounded-2xl"
            innerText="Cancel"
          />
          <Button
            onClick={ButtonOnClick}
            className=" text-white bg-pink w-1/2 rounded-2xl"
            innerText={btn}
          />
        </div>
      </div>
    </div>
  );
};