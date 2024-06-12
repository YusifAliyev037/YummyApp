import React, { useState, useEffect } from "react";
import { translate } from "../../public/lang/translate";
import {  getRestaurants, Restaurant } from "../AdminComponents/Services/axios";
import { GrClose } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

interface SearchProps {
  locale: string;
}

const SearchComponent: React.FC<SearchProps> = ({ locale }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Restaurant[]>([]);
  const [results2, setResults2] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const debounceSearch = setTimeout(async () => {
  //     if (query.trim() !== "") {
  //       setLoading(true);
  //       setError("");
  //       try {
  //         const searchData = await search(query);
  //         if (Array.isArray(searchData)) {
  //           const filteredResults = searchData.slice(0, 3);
  //           setResults(filteredResults);
  //         } else {
  //           setError("Products not found");
  //         }
  //       } catch (err) {
  //         setError("Failed to fetch search results");
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       setResults([]);
  //     }
  //   }, 300);

  //   return () => clearTimeout(debounceSearch);
  // }, [query]);

  // restaurants/k0C2vKxgTq4zPlfGGbQw
  const router = useRouter();
 
  async function getData(){
    let bb= await getRestaurants()
    setResults(bb.data.result.data)
    setResults2(bb.data.result.data)
  } 

  useEffect(()=>{
    getData()

  },[])
  console.log(results);
  
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        setQuery(e.target.value);
        const filteredData = results.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
      setResults2(filteredData)
       
       
        
  };


  const openSearchModal = () => {
    setShowModal(true);
  };

  const closeSearchModal = () => {
    setShowModal(false);
  };
  const handleClick = (id:string) => {
    setShowModal(false);
    router.push(`/restaurants/${id}`);
  };

  return (
    <div className="relative ml-[20px] mr-[40px] hidden md:block">
      <input
        type="text"
        name="searchQuery"
        placeholder={translate("Search", locale)}
        className="p-2 border rounded-xl pr-8  w-[250px] h-[45px]"
        value={query}
        onChange={handleInputChange}
        onFocus={openSearchModal}
       
      />
      {showModal && (
        <div className="absolute bg-white border border-gray300 mt-1 p-2 w-[250px] z-10">
          <button
            onClick={closeSearchModal}
            className="absolute top-0 right-0 m-2"




          >
            <GrClose />
          </button>
          <div className="max-h-48 overflow-y-auto">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red500 mt-2">{error}</p>}
            <ul>
              {results2.map((product) => (
                <li key={product.id}    onClick={() => handleClick(product.id)}className="p-2 flex items-center ">
                   <img src={product.img_url} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center font-light w-full text-lg text-client-search-modal-text mt-5">
            {translate("More", locale)}
            <span className="ml-2">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
