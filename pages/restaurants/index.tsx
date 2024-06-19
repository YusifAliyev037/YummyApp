import React, { useEffect, useState } from "react";
import { Box, Card, CardBody, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Restaurant, getRestaurants } from "@/shared/AdminComponents/Services/axios";
import RestaurantNavbar from "@/shared/ClientComponent/RestaurantNavbar";
import { RestaurantFilterModal } from "@/shared/ClientComponent/RestaurantFilterModal";
import dynamic from "next/dynamic";

const ClientHeader = dynamic(() => import("../../shared/ClientComponent/ClientHeader"))
const ClientFooter = dynamic(() => import("../../shared/ClientComponent/ClientFooter"))

const Index: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const [filteredRes, setFilteredRes] = useState<Restaurant[]>([]);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleOpenFilterModal = () => {
    setFilterModalOpen(true);
  };
  const handleCloseFilterModal = () => {
    setFilterModalOpen(false);
  };

  const filterRes = (id?: string) => {
    if (id) {
      const filteredArr = restaurant.filter((item) => item.category_id === id);

      if (filteredArr.length === 0) {
        toast({
          title: "Can't find any product!",
          status: "warning",
          duration: 2000,
          position: "top-right",
          variant: "subtle",
        });
      }
      setFilteredRes(filteredArr);
    } else {
      setFilteredRes(restaurant);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const res = await getRestaurants();
      const restaurantArr = res?.data.result.data;
      setRestaurant(restaurantArr);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleClickCard = (id: string) => {
    router.push(`/restaurants/${id}`);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    filterRes();
  }, [restaurant]);

  return (
    <>
      <Box>
        <Box as="header">
          <ClientHeader />
        </Box>
        <Box as="main">
          <Box className="flex xxl:flex-nowrap xs:flex-wrap xs:gap-4">
            <Box>
              <RestaurantNavbar onClick={filterRes} />
            </Box>
            <div
            className="flex sm:hidden items-center mt-4 justify-center gap-2 w-[350px] shadow-lg p-4"
            onClick={handleOpenFilterModal}
          >
            <Image width={25} height={10} src={"/filterRes.svg"} alt="filter" />
            <p className="font-medium text-2xl text-grayText2">Filters</p>
          </div>
          <Box className="flex">

          {/* Modal */}
          {isFilterModalOpen && (
            <RestaurantFilterModal  onClick={filterRes} onClose={handleCloseFilterModal} />
          )}
            <Box className="flex xxl:gap-10 xs:gap-8 flex-wrap">
              {filteredRes.map((item) => (
                <Card
                  className="mt-6 h-100% xxl:w-[220px] xs: w-44  cursor-pointer"
                  key={item.id}
                  onClick={() => handleClickCard(item.id)}
                >
                  <CardBody>
                    <Image
                      src={item.img_url}
                      alt={item.name}
                      className="object-cover"
                      borderRadius="sm"
                      height={"160px"}
                      width={"170px"}
                    />
                    <Stack height="100%">
                      <Text
                        className="mt-2 text-gray600 font-medium text-xl xxl:text-left xs:text-center"
                        fontFamily={"Roboto"}
                        lineHeight={"20px"}
                      >
                        {item.name}
                      </Text>
                      <Text
                        className="font-medium text-sm text-gray300 mb-2 xxl:text-left xs:text-center"
                        fontFamily={"Roboto"}
                      >
                        {item.cuisine}
                      </Text>
                      <Box className="flex items-center gap-3 xs:flex-wrap">
                        <Text
                          className="text-gray600 font-medium text-base xxl:m-0 xs:ml-8"
                          fontFamily={"Roboto"}
                        >
                          ${item.delivery_price} Delivery
                        </Text>
                        <Text className="bg-red400 py-1 px-3 rounded-30 text-white text-base font-medium xxl:m-0 xs:ml-8">
                          {item.delivery_min} Min
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </Box>
          </Box>
          </Box>
        </Box>
        <Box as="footer">
          <ClientFooter />
        </Box>
      </Box>
    </>
  );
};

export default Index;
