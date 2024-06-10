// import type { NextPage } from "next";
// import Head from "next/head";
// import ClientHeader from "./ClientHeader/index";
// import ClientFooter from "./ClientFooter/index";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// interface FormData {
//   firstName: string;
//   surname: string;
//   phoneNumber: string;
//   city: string;
//   address1: string;
//   address2?: string;
//   buildingNumber: string;
//   blockNumber: string;
//   floor: string;
//   doorNumber: string;
//   notes?: string;
// }

// const ConfirmPayment: NextPage = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState<FormData | null>(null);
//   const [selectedPayment, setSelectedPayment] = useState<string>("");

//   useEffect(() => {
//     const storedFormData = localStorage.getItem("formData");
//     const storedSelectedPayment = localStorage.getItem("selectedPayment");
//     if (storedFormData) {
//       setFormData(JSON.parse(storedFormData));
//     }
//     if (storedSelectedPayment) {
//       setSelectedPayment(storedSelectedPayment);
//     }
//   }, []);

//   const handlePayment = () => {
//     alert("Payment Successful!");
//   };

//   return (
//     <>
//       <Head>
//         <title>Confirm Payment</title>
//       </Head>
//       <ClientHeader />
//       <div className="container mx-auto px-4 py-10">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Confirm Payment
//           </h2>
//           {formData && (
//             <div>
//               <h3 className="text-lg font-semibold mb-4">
//                 Contact and Address Details
//               </h3>
//               <p>
//                 <strong>Name:</strong> {formData.firstName} {formData.surname}
//               </p>
//               <p>
//                 <strong>Phone Number:</strong> {formData.phoneNumber}
//               </p>
//               <p>
//                 <strong>City:</strong> {formData.city}
//               </p>
//               <p>
//                 <strong>Address 1:</strong> {formData.address1}
//               </p>
//               {formData.address2 && (
//                 <p>
//                   <strong>Address 2:</strong> {formData.address2}
//                 </p>
//               )}
//               <p>
//                 <strong>Building Number:</strong> {formData.buildingNumber}
//               </p>
//               <p>
//                 <strong>Block Number:</strong> {formData.blockNumber}
//               </p>
//               <p>
//                 <strong>Floor:</strong> {formData.floor}
//               </p>
//               <p>
//                 <strong>Door Number:</strong> {formData.doorNumber}
//               </p>
//               {formData.notes && (
//                 <p>
//                   <strong>Notes for Courier:</strong> {formData.notes}
//                 </p>
//               )}
//             </div>
//           )}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-4">
//               Selected Payment Method
//             </h3>
//             <p>{selectedPayment}</p>
//           </div>
//           <div className="mt-8 text-center">
//             <button
//               className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
//               onClick={handlePayment}
//             >
//               Confirm and Pay
//             </button>
//           </div>
//         </div>
//       </div>
//       <ClientFooter />
//     </>
//   );
// };

// export default ConfirmPayment;
