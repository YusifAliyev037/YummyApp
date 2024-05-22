import { Box } from '@chakra-ui/react';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from '@/shared/AdminComponents/Services/axios';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
  onDelete: (restaurant: Restaurant) => void;
}

const RestaurantList: FC<RestaurantListProps> = ({ restaurants, onEdit, onDelete }) => (
  <Box className="flex flex-wrap gap-4">
    {restaurants?.map((restaurant) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} onEdit={() => onEdit(restaurant)} onDelete={() => onDelete(restaurant)} />
    ))}
  </Box>
);

export default RestaurantList;
