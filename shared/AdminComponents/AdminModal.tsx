import React, { useEffect } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";

interface Props {
  hidden: boolean;
  Sethidden: React.Dispatch<React.SetStateAction<boolean>>;
  addName: String;
  imgName: String;
  informationName: String;
  component: JSX.Element;
}

const AdminModal: React.FC<Props> = ({
  hidden,
  Sethidden,
  addName,
  imgName,
  informationName,
  component,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.getElementById("admin-modal");
      if (modal && !modal.contains(event.target as Node)) {
        Sethidden(true);
      }
    };

    if (!hidden) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [hidden, Sethidden]);

  const handleClose = () => {
    Sethidden(true);
  };

  return (
    <Box
      id="admin-modal"
      className={`h-full z-20 w-2/3 bg-blue10 flex flex-col container mx-auto px-8 ${hidden ? "hidden" : "fixed"}`}
      justifyContent={"space-between"}
      style={{ right: 0 }}
    >
      <Box className="relative gap-[40px] flex flex-col container mx-auto px-8">
        {/* Kapama butonunu etkinleştirmek isterseniz, aşağıdaki yorum satırlarını kaldırın */}
        {/* <Button
          onClick={handleClose}
          className="absolute"
          style={{
            width: "27px",
            height: "27px",
            left: "10px",
            top: "10px",
            backgroundColor: "rgb(199, 79, 235)",
            color: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          X
        </Button> */}
        <Box className="pt-[28px]">
          <Text className="font-roboto text-gray10 text-2xl font-medium leading-6 tracking-tighter text-left">
            {addName}
          </Text>
        </Box>

        <Box justifyContent={"space-between"} className="flex">
          <Text className="font-roboto text-gray10 text-lg font-medium leading-6 tracking-tighter text-left">
            {imgName}
          </Text>
          <Box className="w-[60%] bg-gray20 h-[122px] rounded-[14px] flex justify-center items-center">
            <Box className="flex flex-col">
              <Image src="/upload.svg" />
              <Text className="font-roboto text-gray10 text-lg font-medium leading-6 tracking-tighter text-left">
                upload
              </Text>
            </Box>
          </Box>
        </Box>

        <Box justifyContent={"space-between"} className="flex">
          <Text className="font-roboto text-gray10 text-lg font-medium leading-6 tracking-tighter text-left">
            {informationName}
          </Text>

          {component}
        </Box>
      </Box>

      <Box className="flex content-center gap-10 p-4 border-t-2 border-t-gray20">
        <Button
          width={"400px"}
          height={"50px"}
          borderRadius={"14px"}
          color={"#FFFFFF"}
          background={"#43445A"}
          onClick={() => Sethidden(true)}
        >
          Cancel
        </Button>

        <Button
          width={"400px"}
          height={"50px"}
          borderRadius={"14px"}
          color={"#FFFFFF"}
          background={"#C035A2"}
          onClick={() => Sethidden(false)}
        >
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default AdminModal;
