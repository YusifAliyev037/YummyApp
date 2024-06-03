import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
interface PaginationProps {
  getPages: (pageNumber: number) => void; 
  length: number;
}

function Pagination({ getPages, length: number }: PaginationProps) {
  
  const [page, setPage] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function handleChange(clickEvent: { selected: number }) {
    setPage(clickEvent.selected);
  }
 
  useEffect(()=>{
    getPages(page);
  },[page,])  
  
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box height={"200px"}   display={"flex"} alignItems={"end"} justifyContent={"center"}>
      {isMobile ? (
   <Box height={"200px"} display={"flex"} alignItems={"end"} justifyContent={"space-between"}>
   <ReactPaginate 
     pageCount={number}
     className='flex'
     previousLabel={
       <button>
         <div className="flex items-center justify-center text-pink-500 text-4xl border-2 border-pink10 rounded-full p-2">
           <GrFormPrevious style={{ color: "#EC5CF8", fontSize: "44px" }} />
         </div>
       </button>
     }
     pageClassName="flex items-center justify-center w-16 h-16 text-pink10 text-4xl rounded-full border-2 border-pink10 mr-2"
     activeClassName="bg-pink10 ml-2"
     activeLinkClassName="text-white"
     onPageChange={handleChange}
     nextLabel={
       <button>
         <div className="flex items-center justify-center text-pink-500 text-4xl border-2 border-pink10 rounded-full p-2">
           <GrFormNext style={{ color: "#EC5CF8", fontSize: "44px" }} />
         </div>
       </button>
     }
     pageLinkClassName="cursor-pointer "
     pageRangeDisplayed={0} 
     marginPagesDisplayed={0} 
   /> 
 </Box>
 
      ) : (
        <Box height={"200px"}   display={"flex"} alignItems={"end"} justifyContent={"center"}>
  <ReactPaginate 
    pageCount={number}
    className='flex'
    previousLabel={<button><div className="flex items-center justify-center text-pink-500 text-4xl border-2 border-pink10 rounded-full p-2"><GrFormPrevious style={{ color: "#EC5CF8", fontSize: "44px" }} /></div></button>}
    pageClassName="flex items-center justify-center w-16 h-16 text-pink10 text-4xl rounded-full border-2 border-pink10 mr-2"
    activeClassName="bg-pink10"
    activeLinkClassName="text-white"
    
    nextLabel={<button><div className="flex items-center justify-center text-pink-500 text-4xl border-2 border-pink10 rounded-full p-2"><GrFormNext style={{ color: "#EC5CF8", fontSize: "44px" }} /></div></button>}
    pageLinkClassName="cursor-pointer"
    onPageChange={handleChange}
  /> 
</Box>
        
      )}
    </Box>
  );
}

export default Pagination;


































