import React, { useState } from "react";
import { translate } from "../../public/lang/translate";
import { search, Products } from "../AdminComponents/Services/axios";

import { GrClose } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface SearchProps {
  locale: string;
}

const SearchComponent: React.FC<SearchProps> = ({ locale }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await search(query);
      if (Array.isArray(data)) {
        const filteredResults = data
          .filter((product: Products) =>
            (product.name as string).toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 3);
        setResults(filteredResults);
      } else {
        setError("Search results are not in the expected format");
      }
    } catch (err) {
      setError("Failed to fetch search results");
    } finally {
      setLoading(false);
    }
  };

  const openSearchModal = () => {
    setShowModal(true);
  };

  const closeSearchModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative mr-[40px]">
      <input
        type="text"
        name="searchQuery"
        placeholder={translate("Search", locale)}
        className="p-2 border border-black pr-8 focus:bg-gray200 focus:border-red500 w-[250px] h-[45px]"
        value={query}
        onChange={handleInputChange}
        onFocus={openSearchModal}
        onBlur={closeSearchModal} // Close modal when input loses focus
      />
      {showModal && (
        <div className="absolute bg-white border border-gray-300 mt-1 p-2 w-[250px] z-10">
          <button
            onClick={closeSearchModal}
            className="absolute top-0 right-0 m-2"
          >
            <GrClose />
          </button>
          <div className="max-h-48 overflow-y-auto">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <ul>
              {results.map((product) => (
                <li key={product.id} className="p-2">
                  {product.name} - {product.description}
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
