import { Card, CardBody, Image, Stack, Text, ButtonGroup, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Restaurant } from '@/shared/AdminComponents/Services/axios';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onEdit: () => void;
  onDelete: () => void;
}

const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant, onEdit, onDelete }) => (
  <Card className="w-full md:w-[247px] h-[83px] flex flex-col justify-center p-2" boxShadow="lg" borderRadius="lg">
    <CardBody className="flex items-center p-0">
      <Image
        className="w-[65px] h-[65px] object-cover"
        src={restaurant.img_url || 'https://media.traveler.es/photos/6137726a7ad90bc43bae0055/master/pass/123930.jpg'}
        alt={restaurant.name}
        borderRadius="md"
      />
      <Stack ml="2" spacing="1" flex="1">
        <Text fontSize="sm" fontWeight="bold">
          {restaurant.name}
        </Text>
        <Text fontSize="text-[5px]">
          Delivery Price: ${restaurant.delivery_price}
        </Text>
      </Stack>
      <ButtonGroup spacing="1" flexDirection="column" justifyContent="center" ml="auto">
        <IconButton aria-label="Edit" icon={<EditIcon />} size="xs" fontSize="12px" variant="ghost" colorScheme="teal" onClick={onEdit} />
        <IconButton aria-label="Delete" icon={<DeleteIcon />} size="xs" fontSize="12px" variant="ghost" colorScheme="red" onClick={onDelete} />
      </ButtonGroup>
    </CardBody>
  </Card>
);

export default RestaurantCard;
