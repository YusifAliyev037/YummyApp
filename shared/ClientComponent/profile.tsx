import { Box, Button, Input, Text, useToast, Flex } from "@chakra-ui/react";
import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { updateProfile } from "../AdminComponents/Services/axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addlogin, updateLogin } from "../redux/global/globalSlice";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../../server/configs/firebase";
import { useRouter } from "next/router";
import { translate } from "@/public/lang/translate";

interface FormRegister {
  phone?: string;
  username?: string;
  fullname?: string;
  email?: string;
  address?: string;
  password?: string;
  access_token?: string | undefined;
  img_url?: string | undefined;
}

const Profile = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.global.login);

  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgOnload, setImgOnload] = useState(false);

  const [formData, setFormData] = useState<FormRegister>({
    phone: "",
    username: "",
    fullname: "",
    email: "",
    address: "",
    password: "",
    img_url: "",
  });

  const getİmage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const name = file.name;
    const imageRef = ref(fileStorage, `files/images/${name}`);

    uploadBytes(imageRef, file).then((snapshot) => {
      setImgOnload(true);
      getDownloadURL(snapshot.ref).then((url) => {
        setImgOnload(false);
        setImgUrl(url);
        setFormData((prevData) => ({
          ...prevData,
          img_url: url,
        }));
      });
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === "email") return;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email || "")) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      if (formData.access_token) {
        const response = await updateProfile(formData, formData.access_token);
        dispatch(updateLogin(response?.data));
        dispatch(addlogin(formData));
        console.log(formData.access_token);

        toast({
          title: "Success",
          status: "success",
          isClosable: true,
          position: "top-right",
        });

        console.log(response);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    console.log(formData);
  };

  useEffect(() => {
    if (loginState !== formData) {
      setFormData((prevData) => ({
        ...prevData,
        ...loginState,
      }));
    }
  }, [loginState]);

  // translate
  const router = useRouter();
  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";
  return (
    <Box className="flex flex-col items-center mx-2 mt-4 pb-5 h-auto gap-9 sm:mr-8 sm:bg-white40 bg-transparent">
      <Box className="mt-10 self-start pl-6 w-full sm:w-auto ">
        <Text fontSize="32px" height="32px" color="#4F4F4F">
          {translate("Profile", locale)}
        </Text>
      </Box>
      <Box>
        <Box className="flex flex-col items-center sm:flex-row">
          <label htmlFor="file-input">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
              />
            ) : (
              <Box className="relative">
                <input
                  onChange={getİmage}
                  type="file"
                  id="file"
                  accept="image/*"
                  className="absolute opacity-0 cursor-pointer"
                />
                <img src="/uploaduser.svg" alt="Upload" />
              </Box>
            )}
          </label>
          <Input
            type="file"
            id="file-input"
            className="hidden"
            onChange={handleImageChange}
          />
        </Box>
      </Box>
      <Flex
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
        gap={10}
        width="100%"
        px={4}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          gap={5}
          width="100%"
          maxWidth="500px"
        >
          <Box width="100%">
            <Text color="#4F4F4F" >{translate("Contact", locale)}</Text>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              bg="gray.200"
              type="number"
              placeholder="+994"
              width="100%"
              height='53px'
              backgroundColor="#fff"
            />
          </Box>
          <Box width="100%">
            <Text color="#4F4F4F" >{translate("User Name", locale)}</Text>
            <Input
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              bg="gray.200"
              type="text"
              placeholder="Your Username"
              backgroundColor="#fff"
              height='53px'
              width="100%"
            />
          </Box>
          <Box width="100%">
            <Text color="#4F4F4F" >{translate("Full Name", locale)}</Text>
            <Input
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              bg="gray.200"
              type="text"
              placeholder="Your Fullname"
              backgroundColor="#fff"
              height='53px'
              width="100%"
            />
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          gap={5}
          width="100%"
          maxWidth="500px"
        >
          <Box width="100%">
            <Text color="#4F4F4F" >{translate("Email", locale)}</Text>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              bg="gray.200"
              type="email"
              placeholder="yourmail@mail.com"
              focusBorderColor="red.500"
              backgroundColor="#fff"
              height='53px'
              width="100%"
            />
          </Box>
          <Box width="100%">
            <Text color="#4F4F4F" >{translate("Address", locale)}</Text>
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              bg="gray.200"
              type="text"
              placeholder="Yasamal 104, Baku"
              backgroundColor="#fff"
              height='53px'
              width="100%"
              mb={6}
            />
          </Box>
          <Button
            onClick={handleSubmit}
            type="submit"
            bg="green.500"
            sx={{ backgroundColor: "#6FCF97 !important" }}
            height='53px'
            width="100%"
          >
            {translate("Save", locale)}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;
