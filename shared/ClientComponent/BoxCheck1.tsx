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
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BoxCheck2 from "./BoxCheck2";
import CheckoutOr from "./CheckoutOr";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
import { postOrder } from "../AdminComponents/Services/axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BoxCheck1 = () => {
  const ROUTER = useRouter();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [showCheckoutOr, setShowCheckoutOr] = useState(false);
  const basketArr = useSelector((state: RootState) => state.global.basket);
  const loginState = useSelector((state: RootState) => state.global.login);
  let toast = useToast();
  console.log(basketArr);
  const { isOpen, onOpen, onClose } = useDisclosure();

  type Order = {
    delivery_address: string;
    contact: string;
    payment_method: string;
  };

  const [order, setOrder] = useState<Order>({
    delivery_address: "",
    contact: "",
    payment_method: "",
  });
  console.log(order);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Order
  ) => {
    setOrder({ ...order, [field]: e.currentTarget.value });
  };

  const toggleCheck1 = () => {
    setIsChecked1(!isChecked1);
    if (!isChecked1) {
      setOrder({ ...order, payment_method: "0" });
      setIsChecked2(false);
    } else {
      setOrder({ ...order, payment_method: "" });
    }
  };

  const toggleCheck2 = () => {
    setIsChecked2(!isChecked2);
    if (!isChecked2) {
      setOrder({ ...order, payment_method: "1" });
      setIsChecked1(false);
      onOpen();
    } else {
      setOrder({ ...order, payment_method: "" });
    }
  };

  console.log(basketArr.id);

  const handleCheckout = async () => {
    let newdata = { ...order, basket_id: String(basketArr.id) };

    if (loginState?.username && loginState.username.length !== 0) {
      if (
        newdata.delivery_address.length != 0 &&
        newdata.contact.length != 0 &&
        newdata.payment_method.length != 0
      ) {
        try {
          const response = await postOrder(newdata);
          setShowCheckoutOr(true);
          ROUTER.push("Payment.tsx");
        } catch (error) {
          toast({
            title: "Order submission failed",
            description:
              "There was an issue submitting your order. Please try again.",
            status: "error",
            duration: 2000,
            position: "top-right",
            variant: "subtle",
          });
        }
      } else {
        toast({
          title: "Please fill in all inputs!",
          status: "warning",
          duration: 2000,
          position: "top-right",
          variant: "subtle",
        });
      }
    } else {
      toast({
        title: "You are not logged in!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
    }
  };

  const router = useRouter();
  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

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
    <Box className="flex" gap="19px" flexDirection="row-reverse">
      {!showCheckoutOr ? (
        <>
          <Box>
            <BoxCheck2 />
          </Box>
          <Box
            className="flex flex-col mt-4 bg-white40"
            width="618px"
            height="515px"
          >
            <Box className="ml-10 mt-10">
              <Text
                marginBottom="23px"
                fontSize="3xl"
                className="text-color-#4F4F4F"
              >
                {translate("Checkout", locale)}
              </Text>
            </Box>
            <Box className="flex justify-center">
              <Box>
                <Box>
                  <Text className="text-color-#4F4F4F">
                    {translate("Delivery Address", locale)}
                  </Text>
                  <Input
                    width="542px"
                    height="53px"
                    bg="white"
                    type="text"
                    placeholder="Ataturk 45,Genclik Baku"
                    marginBottom="26px"
                    onChange={(e) => handleChange(e, "delivery_address")}
                  />
                </Box>
                <Box>
                  <Text marginBottom="11px" className="text-color-#4F4F4F">
                    {translate("Contact Number", locale)}
                  </Text>
                  <Input
                    width="542px"
                    height="53px"
                    bg="white"
                    type="text"
                    placeholder="+994"
                    marginBottom="25px"
                    onChange={(e) => handleChange(e, "contact")}
                  />
                </Box>
                <Box>
                  <Box>
                    <Text marginBottom="21px" className="text-color-#4F4F4F">
                      {translate("Payment Method", locale)}
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" gap="7px">
                    <Box
                      width="33px"
                      height="33px"
                      borderRadius="full"
                      bg={isChecked1 ? "#ffff" : "white"}
                      borderWidth="1px"
                      borderColor={isChecked1 ? "#6FCF97" : "#BDBDBD"}
                      onClick={toggleCheck1}
                      cursor="pointer"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {isChecked1 && (
                        <Box
                          width="15px"
                          height="15px"
                          borderRadius="full"
                          bg="#6FCF97"
                        />
                      )}
                    </Box>
                    <Text
                      color="#6FCF97"
                      marginEnd="auto"
                      width="112px"
                      height="21px"
                    >
                      {translate("pay at the door", locale)}
                    </Text>
                    <Box
                      width="33px"
                      height="33px"
                      borderRadius="full"
                      bg={isChecked2 ? "#ffff" : "white"}
                      borderWidth="1px"
                      borderColor={isChecked2 ? "#6FCF97" : "#BDBDBD"}
                      onClick={toggleCheck2}
                      cursor="pointer"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {isChecked2 && (
                        <Box
                          width="15px"
                          height="15px"
                          borderRadius="full"
                          bg="#6FCF97"
                        />
                      )}
                    </Box>
                    <Text>{translate("pay by credit card", locale)}</Text>
                  </Box>
                  <Button
                    marginTop="32px"
                    width="542px"
                    height="53px"
                    bg="#6FCF97"
                    textColor="white"
                    onClick={handleCheckout}
                  >
                    {translate("Checkout", locale)}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <CheckoutOr />
      )}

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
    </Box>
  );
};

export default BoxCheck1;
