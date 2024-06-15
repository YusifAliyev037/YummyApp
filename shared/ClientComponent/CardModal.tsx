import {
  Box,
  Button,
  Input,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";

const CardModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  const router = useRouter();
  const locale = router.locale || "en";
  const toast = useToast();

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const nameRegex = /^[A-Za-z]+$/;
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;

    if (!form.firstName) {
      toast({
        title: "Input is empty",
        description: "First name is required.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!nameRegex.test(form.firstName)) {
      toast({
        title: "Invalid input",
        description: "First name must contain only letters.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!form.lastName) {
      toast({
        title: "Input is empty",
        description: "Last name is required.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!nameRegex.test(form.lastName)) {
      toast({
        title: "Invalid input",
        description: "Last name must contain only letters.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!form.cardNumber) {
      toast({
        title: "Input is empty",
        description: "Card number is required.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!cardNumberRegex.test(form.cardNumber)) {
      toast({
        title: "Invalid input",
        description: "Card number must be 16 digits.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!form.month) {
      toast({
        title: "Input is empty",
        description: "Expiration month is required.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!form.year) {
      toast({
        title: "Input is empty",
        description: "Expiration year is required.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!form.cvv) {
      toast({
        title: "Input is empty",
        description: "CVV is required.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    if (!cvvRegex.test(form.cvv)) {
      toast({
        title: "Invalid input",
        description: "CVV must be 3 digits.",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    console.log("Form is valid");

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className=" bg-green border-b border-gray-300">
          <Text className="text-lg font-bold text-white">
            {translate("Card Details", locale)}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="bg-gray-50 p-6">
          <Box className="flex mb-4">
            <Box className="flex flex-col mr-2">
              <Text className="mb-2">First Name</Text>
              <Input
                placeholder="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleFormChange}
              />
            </Box>
            <Box className="flex flex-col">
              <Text className="mb-2">Last Name</Text>
              <Input
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleFormChange}
              />
            </Box>
          </Box>
          <Box className="mb-4">
            <Text className="mb-2">Card Number</Text>
            <Input
              placeholder="Card Number"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleFormChange}
            />
          </Box>
          <Box className="flex mb-4">
            <Box className="flex flex-col mr-2">
              <Text className="mb-2">Expiry</Text>
              <Select
                placeholder="Month"
                name="month"
                value={form.month}
                onChange={handleFormChange}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className="flex flex-col mr-2">
              <Text className="mb-2">Date</Text>
              <Select
                placeholder="Year"
                name="year"
                value={form.year}
                onChange={handleFormChange}
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i} value={2025 + i}>
                    {2025 + i}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className="flex flex-col">
              <Text className="mb-2">CVV</Text>
              <Input
                placeholder="CVV"
                name="cvv"
                value={form.cvv}
                onChange={handleFormChange}
              />
            </Box>
          </Box>
          <Box className="mt-4 flex justify-center gap-4">
            <img
              src="/visa.png"
              alt="Visa"
              className="w-12 h-8 object-contain"
            />
            <img
              src="/mastercard.png"
              alt="MasterCard"
              className="w-12 h-8 object-contain"
            />
            <img
              src="/maestro.png"
              alt="MaestroCard"
              className="w-12 h-8 object-contain"
            />
            <img
              src="/amex.png"
              alt="AmericanExpress"
              className="w-12 h-8 object-contain"
            />
            <img
              src="/unionpay.png"
              alt="UnionPay"
              className="w-12 h-8 object-contain"
            />
          </Box>
        </ModalBody>
        <ModalFooter className="bg-gray-100 border-t border-gray-300">
          <Button
            sx={{ backgroundColor: "#6fcf97", color: "white" }}
            variant="ghost"
            onClick={onClose}
          >
            {translate("Cancel", locale)}
          </Button>
          <Button
            sx={{ backgroundColor: "#6fcf97", color: "white" }}
            ml={3}
            onClick={handleSubmit}
          >
            {" "}
            {translate("Submit", locale)}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;
