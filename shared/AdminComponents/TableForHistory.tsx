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
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
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

const TableForHistory: React.FC<Props> = ({ name, order, setOrders }) => {
    const [isOpenViewModal, setIsOpenViewModal] = useState(false);
    const [selectedOrderProducts, setSelectedOrderProducts] = useState<Product[]>([]);

   

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

   

    function view(id: string) {
        setIsOpenViewModal(true);
        const filteredOrder = order.find(order => order.id === id); 
        if (filteredOrder) {
            setSelectedOrderProducts(filteredOrder.products); 
        }
    }

    return (
        <TableContainer margin={"3px"}  >
            <Table size='sm' backgroundColor={"white"}>
                <Thead>
                    <Tr >
                        {name.map((item, index) => (
                            <Th height={"70px"} fontSize={"12px"} padding={"auto"} textAlign={"center"} key={index}>{item}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {order.map((item, index) => (
                        <Tr key={index}>
                            <Td height={"70px"} fontSize={"15px"} lineHeight={"20px"} textAlign={"center"}>{9110+index}</Td>
                            <Td height={"70px"} fontSize={"15px"} textAlign={"center"}>{item.customer_id}</Td>
                            <Td height={"70px"} fontSize={"15px"} textAlign={"center"}>{formatTimestampToDate(item.created)}</Td>
                            <Td height={"70px"} fontSize={"15px"} flexWrap={"wrap"} textAlign={"center"}>{item.delivery_address}</Td>
                            <Td height={"70px"} fontSize={"15px"} textAlign={"center"}>{item.amount}</Td>
                            <Td height={"70px"} fontSize={"15px"} textAlign={"center"}>{parseInt(item.payment_method) === 0 ? 'Pay Cash' : 'Credit Card'}</Td>
                            <Td height={"70px"} fontSize={"15px"} textAlign={"center"}>{item.contact}</Td>
                            <Td height={"70px"} fontSize={"15px"} textAlign={"center"} display={"flex"} gap={"4px"} >
                                <IconButton color='teal' aria-label='View' icon={<ViewIcon />} onClick={() => view(item.id)} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <SizeExample 
                isOpen={isOpenViewModal} 
                orders={selectedOrderProducts} 
                setIsOpenSizeExample={setIsOpenViewModal} 
                onClose={() => setIsOpenViewModal(false)} 
            />
        </TableContainer>
    );
};

export default TableForHistory;
