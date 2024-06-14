// import React, { useState } from "react";

// const countries = [
//   { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
//   { code: "+90", name: "Turkey", flag: "🇹🇷" },
//   { code: "+971", name: "UAE", flag: "🇦🇪" },
//   { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
//   { code: "+964", name: "Iraq", flag: "🇮🇶" },
//   { code: "+962", name: "Jordan", flag: "🇯🇴" },
//   { code: "+965", name: "Kuwait", flag: "🇰🇼" },
//   { code: "+961", name: "Lebanon", flag: "🇱🇧" },
//   { code: "+218", name: "Libya", flag: "🇱🇾" },
//   { code: "+212", name: "Morocco", flag: "🇲🇦" },
//   { code: "+968", name: "Oman", flag: "🇴🇲" },
//   { code: "+970", name: "Palestine", flag: "🇵🇸" },
//   { code: "+974", name: "Qatar", flag: "🇶🇦" },
//   { code: "+963", name: "Syria", flag: "🇸🇾" },
//   { code: "+216", name: "Tunisia", flag: "🇹🇳" },
//   { code: "+967", name: "Yemen", flag: "🇾🇪" },
//   { code: "+20", name: "Egypt", flag: "🇪🇬" },
//   { code: "+249", name: "Sudan", flag: "🇸🇩" },
//   { code: "+253", name: "Djibouti", flag: "🇩🇯" },
//   { code: "+221", name: "Senegal", flag: "🇸🇳" },
//   { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
//   { code: "+92", name: "Pakistan", flag: "🇵🇰" },
//   { code: "+1", name: "USA", flag: "🇺🇸" },
//   { code: "+44", name: "UK", flag: "🇬🇧" },
// ];

// const azerbaijanCities = [
//   "Baku",
//   "Ganja",
//   "Sumqayit",
//   "Khirdalan",
//   "Mingachevir",
//   "Lankaran",
//   "Shirvan",
//   "Nakhchivan",
//   "Sheki",
//   "Yevlakh",
//   "Khankendi",
//   "Shamakhi",
//   "Shaki",
//   "Aghdam",
//   "Goychay",
//   "Barda",
//   "Tovuz",
//   "Zaqatala",
//   "Aghdash",
//   "Bilasuvar",
//   "Fizuli",
//   "Gadabay",
//   "Goranboy",
//   "Goygol",
//   "Hajigabul",
//   "Imishli",
//   "Ismayilli",
//   "Jalilabad",
//   "Kalbajar",
//   "Kurdamir",
//   "Lachin",
//   "Lerik",
//   "Masally",
//   "Neftchala",
//   "Oghuz",
//   "Ordubad",
//   "Qabala",
//   "Qakh",
//   "Qazakh",
//   "Quba",
//   "Qubadli",
//   "Qusar",
//   "Sabirabad",
//   "Sadarak",
//   "Salyan",
//   "Samukh",
//   "Saatly",
//   "Shabran",
//   "Shamkir",
//   "Shusha",
//   "Siazan",
//   "Terter",
//   "Ujar",
//   "Yardimli",
//   "Zangilan",
//   "Zardab",
// ];

// // const ContactForm: React.FC = () => {
// //   const [selectedCountry, setSelectedCountry] = useState<string>("+994");
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     surname: "",
// //     phoneNumber: "",
// //     city: "",
// //     address1: "",
// //     address2: "",
// //     buildingNumber: "",
// //     blockNumber: "",
// //     floor: "",
// //     doorNumber: "",
// //     notes: "",
// //   });

// const ContactForm: React.FC<{
//   formData: any;
//   handleInputChange: (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => void;
// }> = ({ formData, handleInputChange }) => {
//   const [selectedCountry, setSelectedCountry] = useState<string>("+994");

//   //   const handleInputChange = (
//   //     e: React.ChangeEvent<
//   //       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//   //     >
//   //   ) => {
//   //     const { name, value } = e.target;
//   //     setFormData((prev) => ({ ...prev, [name]: value }));
//   //   };

//   return (
//     <div className="w-1/2 pr-4 bg-gray200">
//       <h2 className="text-2xl font-bold mb-6">Contact and Address</h2>
//       <form>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Name Surname
//           </label>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               placeholder="First Name"
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               required
//             />
//             <input
//               type="text"
//               name="surname"
//               value={formData.surname}
//               onChange={handleInputChange}
//               placeholder="Surname"
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <div className="flex">
//             <select
//               value={selectedCountry}
//               onChange={(e) => setSelectedCountry(e.target.value)}
//               className="mt-1 p-2 block border border-gray-300 rounded-l-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             >
//               {countries.map((country) => (
//                 <option key={country.code} value={country.code}>
//                   {country.flag} {country.name} ({country.code})
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-r-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <select
//             name="city"
//             value={formData.city}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           >
//             <option value="">Select a city</option>
//             {azerbaijanCities.map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Address 1
//           </label>
//           <input
//             type="text"
//             name="address1"
//             value={formData.address1}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         {/* <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Address 2 (Optional)
//           </label>
//           <input
//             type="text"
//             name="address2"
//             value={formData.address2}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//           />
//         </div> */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Building Number
//           </label>
//           <input
//             type="text"
//             name="buildingNumber"
//             value={formData.buildingNumber}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         {/* <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Block Number
//           </label>
//           <input
//             type="text"
//             name="blockNumber"
//             value={formData.blockNumber}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//         </div> */}
//         {/* <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Floor
//           </label>
//           <input
//             type="text"
//             name="floor"
//             value={formData.floor}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//         </div> */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Door Number
//           </label>
//           <input
//             type="text"
//             name="doorNumber"
//             value={formData.doorNumber}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         {/* <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Notes for Courier (Optional)
//           </label>
//           <textarea
//             name="notes"
//             value={formData.notes}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             rows={3}
//           />
//         </div> */}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
