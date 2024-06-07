import type { NextPage } from "next";
import Head from "next/head";
import ClientHeader from "./ClientHeader/index";
import ClientFooter from "./ClientFooter/index";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ContactForm from "./PaymentForm";
import PaymentMethods from "./PaymentMethod";

const Payment: NextPage = () => {
  const router = useRouter();
  const locale = router.locale || "en";

  useEffect(() => {
    const storedLocale = localStorage.getItem("lang") || "en";
    if (storedLocale !== locale) {
      router.push(router.pathname, router.asPath, { locale: storedLocale });
    }
  }, [locale, router]);

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    phoneNumber: "",
    city: "",
    address1: "",
    address2: "",
    buildingNumber: "",
    blockNumber: "",
    floor: "",
    doorNumber: "",
    notes: "",
  });

  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  const handleSubmit = () => {
    const isFormComplete = Object.entries(formData)
      .filter(([key]) => key !== "address2" && key !== "notes")
      .every(([, value]) => value.trim() !== "");
    if (!isFormComplete) {
      alert("Please fill in all the required contact and address details.");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("selectedPayment", selectedPayment);

    router.push("/confirm-payment");
  };

  return (
    <>
      <Head>
        <title>{translate("Payment", locale)}</title>
        <meta
          name="description"
          content={translate("Description of Payment", locale)}
        />
      </Head>
      <ClientHeader />
      <div className="container mx-auto px-4">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full flex">
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <PaymentMethods
              selectedPayment={selectedPayment}
              handlePaymentChange={handlePaymentChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <ClientFooter />
    </>
  );
};

export default Payment;
