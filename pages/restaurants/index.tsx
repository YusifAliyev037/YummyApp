import ClientHeader from "@/shared/ClientComponent/ClientHeader";
import ClientFooter from "@/shared/ClientComponent/ClientFooter";
import React, { useEffect, useState } from "react";
import { Box, Card, CardBody, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Restaurant, getRestaurants } from "@/shared/AdminComponents/Services/axios";
import RestaurantNavbar from "@/shared/ClientComponent/RestaurantNavbar";

const Index: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const [filteredRes, setFilteredRes] = useState<Restaurant[]>([]);

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
          <Box className="flex">
            <Box>
              <RestaurantNavbar onClick={filterRes} />
            </Box>
            <Box className="flex gap-10 flex-wrap">
              {filteredRes.map((item) => (
                <Card
                  className="mt-6 h-80 w-58 cursor-pointer"
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
                        className="mt-2 text-gray600 font-medium text-xl"
                        fontFamily={"Roboto"}
                        lineHeight={"20px"}
                      >
                        {item.name}
                      </Text>
                      <Text
                        className="font-medium text-sm text-gray300 mb-2"
                        fontFamily={"Roboto"}
                      >
                        {item.cuisine}
                      </Text>
                      <Box className="flex items-center gap-3">
                        <Text
                          className="text-gray600 font-medium text-base"
                          fontFamily={"Roboto"}
                        >
                          ${item.delivery_price} Delivery
                        </Text>
                        <Text className="bg-red400 py-1 px-3 rounded-30 text-white text-base font-medium">
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
        <Box as="footer">
          <ClientFooter />
        </Box>
      </Box>
    </>
  );
};

export default Index;
