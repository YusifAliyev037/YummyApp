import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { log } from 'console';
interface PaginationProps {
  getPages: (pageNumber: number) => void; 
  length: number;
}

function Pagination({ getPages, length: number }: PaginationProps) {
  
  const [page, setPage] = useState<number>(0);
  function handleChange(clickEvent: { nextSelectedPage: number | undefined }) {
    

  
  
    if(clickEvent.nextSelectedPage !== undefined){
      
      setPage(clickEvent.nextSelectedPage as number);
    }
    else{
      return
    }
  }
 
  

 useEffect(()=>{
  getPages(page)


 },[page])  
  
  return (
<Box height={"200px"}   display={"flex"} alignItems={"end"} justifyContent={"center"}>
  <ReactPaginate 
    pageCount={number}
    className='flex'
    previousLabel={<button><div className="flex items-center justify-center text-pink-500 text-4xl border-2 border-pink10 rounded-full p-2"><GrFormPrevious style={{ color: "#EC5CF8", fontSize: "44px" }} /></div></button>}
    pageClassName="flex items-center justify-center w-16 h-16 text-pink10 text-4xl rounded-full border-2 border-pink10 mr-2"
    activeClassName="bg-pink10"
    activeLinkClassName="text-white"
    onClick={handleChange}
    nextLabel={<button><div className="flex items-center justify-center text-pink-500 text-4xl border-2 border-pink10 rounded-full p-2"><GrFormNext style={{ color: "#EC5CF8", fontSize: "44px" }} /></div></button>}
    pageLinkClassName="cursor-pointer"
  /> 
</Box>




  )
}

export default Pagination

