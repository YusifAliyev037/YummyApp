import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
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
    <Box className="flex flex-col items-center mx-2 mt-4 h-auto gap-9 sm:mr-8 sm:bg-white40 bg-transparent">
      <Box className="mt-10">
        <Text fontSize="32px" height="32px" color="#4F4F4F">
          {translate(" Profile", locale)}
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
      <Box className="flex flex-wrap justify-around gap-10">
        <Box className="mb-8 w-full sm:w-auto xxl:mr-0 sm:mr-8">
          <Box>
            <Text color="#4F4F4F">{translate("Contact", locale)}</Text>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="   bg-gray200"
              type="number"
              placeholder="+994"
              width={444}
              height={53}
              backgroundColor="#ffff"
            />
          </Box>
          <Box mt="7px">
            <Text color="#4F4F4F">{translate("User Name", locale)}</Text>
            <Input
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-[286px] h-[79px] sm:w-[444px] sm:h-[79px] bg-gray200"
              type="text"
              placeholder="Your Username"
              backgroundColor="#ffff"
              height={53}

            />
          </Box>
          <Box mt="7px">
            <Text color="#4F4F4F">{translate("Full Name", locale)}</Text>
            <Input
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="w-[286px] h-[79px] sm:w-[444px] sm:h-[79px] bg-gray200"
              type="text"
              placeholder="Your Fullname"
              backgroundColor="#ffff"
              height={53}

            />
          </Box>
        </Box>
        <Box className="w-full mb-8 xxl:ml-0 sm:w-auto sm:ml-8">
          <Box>
            <Text color="#4F4F4F">{translate("Email", locale)}</Text>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-[286px] h-[79px] sm:w-[444px] sm:h-[79px] bg-gray200"
              type="email"
              placeholder="yourmail@mail.com"
              focusBorderColor="red.500"
              backgroundColor="#ffff"
              height={53}

            />
          </Box>
          <Box mt="7px">
            <Text color="#4F4F4F">{translate("Address", locale)}</Text>
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-[286px] h-[79px] sm:w-[444px] sm:h-[79px] bg-gray200"
              type="text"
              placeholder="Yasamal 104, Baku"
              backgroundColor="#ffff"
              height={53}

            />
          </Box>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-[286px] h-[79px] mt-8 sm:w-[444px] sm:h-[79px] bg-green-500"
            sx={{ backgroundColor: "#6FCF97 !important" }}
            height={53}

          >
            {translate("Save", locale)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
