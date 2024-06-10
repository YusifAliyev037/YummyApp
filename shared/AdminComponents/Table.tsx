import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import DeleteUserModul from '../ClientComponent/DeleteUserModul';
import { deleteUserOrder } from './Services/axios';
import SizeExample from '../ClientComponent/Section5/ModalOrders';

interface Props {
    name: string[];
    order: Order[];
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

interface Product {
    count: number;
    description: string;
    id: string;
    img_url: string;
    name: string;
    price: number;
    rest_id: string;
    amount: number;
    created: number;
}

interface Order {
    id: string;
    amount: number;
    delivery_address: string;
    created: number; 
    contact: string;
    customer_id: string;
    payment_method: string;
    products: Product[];
}

const TableForOrder: React.FC<Props> = ({ name, order, setOrders }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpenViewModal, setIsOpenViewModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
    const [selectedOrderProducts, setSelectedOrderProducts] = useState<Product[]>([]);

    const handleDeleteClick = (orderId: string) => {
        setSelectedOrder(orderId);
        onOpen();
    };

    function formatTimestampToDate(timestamp: number) {
        if (!timestamp) {
            return 'Invalid date';
        }
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    const handleConfirmDelete = () => {
        if (selectedOrder !== null) {
            deleteUserOrder(selectedOrder);
            const filteredOrders = order.filter(order => order.id !== selectedOrder);
            setOrders(filteredOrders);
        }
        onClose();
    };

    function view(id: string) {
        setIsOpenViewModal(true);
        const filteredOrder = order.find(order => order.id === id); // Находим заказ по ID
        if (filteredOrder) {
            setSelectedOrderProducts(filteredOrder.products); // Устанавливаем продукты выбранного заказа
        }
    }

    return (
        <TableContainer margin={"3px"}>
            <Table size='sm' backgroundColor={"white"}>
                <Thead>
                    <Tr>
                        {name.map((item, index) => (
                            <Th height={"70px"} fontSize={"12px"} padding={"0px"} textAlign={"center"} key={index}>{item}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {order.map((item, index) => (
                        <Tr key={index}>
                            <Td height={"70px"} fontSize={"17px"} lineHeight={"20px"} textAlign={"center"}>{item.id}</Td>
                            <Td height={"70px"} fontSize={"17px"} textAlign={"center"}>{item.customer_id}</Td>
                            <Td height={"70px"} fontSize={"17px"} textAlign={"center"}>{formatTimestampToDate(item.created)}</Td>
                            <Td height={"70px"} fontSize={"17px"} flexWrap={"wrap"} textAlign={"center"}>{item.delivery_address}</Td>
                            <Td height={"70px"} fontSize={"17px"} textAlign={"center"}>{item.amount}</Td>
                            <Td height={"70px"} fontSize={"17px"} textAlign={"center"}>{parseInt(item.payment_method) === 0 ? 'Pay Cash' : 'Credit Card'}</Td>
                            <Td height={"70px"} fontSize={"17px"} textAlign={"center"}>{item.contact}</Td>
                            <Td height={"70px"} fontSize={"17px"} textAlign={"center"}>
                                <IconButton color='teal' aria-label='View' icon={<ViewIcon />} onClick={() => view(item.id)} />
                                <IconButton color='red' aria-label='Delete' icon={<DeleteIcon />} onClick={() => handleDeleteClick(item.id)} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <DeleteUserModul isOpen={isOpen} onClose={onClose} onConfirm={handleConfirmDelete} />
            <SizeExample 
                isOpen={isOpenViewModal} 
                orders={selectedOrderProducts} 
                setIsOpenSizeExample={setIsOpenViewModal} 
                onClose={() => setIsOpenViewModal(false)} 
            />
        </TableContainer>
    );
};

export default TableForOrder;
