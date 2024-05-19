import React from "react";
interface Props {
  type?: string;
  p?: string;
  className?: string;
  useRef?: any;
}
export const AdminModalInput = ({
  type = "text",
  p = "Name ",
  className = " mb-6",
  useRef,
}: Props) => {
  return (
    <div className={` flex flex-col gap-2  ${className}`}>
      <p className=" text-gray10 font-medium text-base">{p}</p>
      <input
        ref={useRef}
        className="   bg-darkBlue20 rounded-2xl font-medium text-base  text-whiteLight pl-5 py-3  capitalize "
        type={type}
      />
    </div>
  );
};