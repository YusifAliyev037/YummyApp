import {
  Box,
  Button,
  Input,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BoxCheck2 from "./BoxCheck2";
import CheckoutOr from "./CheckoutOr";
import CardModal from "./CardModal";
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

  return (
    <Box className="flex" gap="19px" flexDirection="row-reverse">
      {!showCheckoutOr ? (
        <Box className="flex flex-col-reverse md:flex-row gap-4 md:gap-[19px]" >
          
            <Box
            className="flex flex-col mt-4  md:bg-white40 md:w-[618px] w-screen "
           
            height="515px"
          >
            <Box className="ml-10 mt-10 " display={{ base: "none", md: "block" }} >
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
                   width={{ base: "100%", md: "542px" }}
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
                   width={{ base: "100%", md: "542px" }}
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
                    width={{ base: "100%", md: "542px" }}
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
          <Box>
            <BoxCheck2 />
          </Box>
          
        </Box>
      ) : (
        <CheckoutOr />
      )}

      <CardModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default BoxCheck1;
