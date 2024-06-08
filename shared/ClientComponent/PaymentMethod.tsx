import React from "react";

const paymentMethods = [
  { name: "Cash on Delivery", image: "/cash-on-delivery.png" },
  { name: "Card on Delivery", image: "/card-on-delivery.png" },
  { name: "PayPal", image: "/paypal.png" },
  { name: "American Express", image: "/amex.png" },
  { name: "Visa", image: "/visa.png" },
  { name: "Mastercard", image: "/mastercard.png" },
  { name: "Maestro", image: "/maestro.png" },
  { name: "UnionPay", image: "/unionpay.png" },
  { name: "Apple Pay", image: "/apple-pay.png" },
  { name: "Google Pay", image: "/google-pay.png" },
  { name: "Ethereum", image: "/ethereum.png" },
  { name: "Bitcoin", image: "/bitcoin.png" },
];

const PaymentMethods: React.FC<{
  selectedPayment: string;
  handlePaymentChange: (paymentMethod: string) => void;
  handleSubmit: () => void;
}> = ({ selectedPayment, handlePaymentChange, handleSubmit }) => {
  return (
    <div className="w-1/2 pl-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Choose Payment Method
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {paymentMethods.map((method) => (
          <button
            key={method.name}
            className={`border-2 p-6 rounded-lg transition-colors ${
              selectedPayment === method.name
                ? "border-blue-500 bg-blue-100"
                : "border-gray200 bg-white hover:border-blue-500 hover:bg-blue-50"
            }`}
            onClick={() => handlePaymentChange(method.name)}
          >
            <div className="text-center">
              <img
                src={method.image}
                alt={method.name}
                className="w-24 h-24 mx-auto"
              />
              <div className="mt-4 text-sm font-semibold">{method.name}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          className="w-full py-3 px-4 bg-red500 text-white rounded-lg hover:bg-red600"
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
