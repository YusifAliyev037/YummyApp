import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Img,
    Button,
} from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
    name: string[];
    order: Order[];
}

interface Order {
    id: number;
    customerId: number;
    time: string;
    adres: string;
    amount: string;
    payment: string;
    contact: string;
}

const TableForOrder: React.FC<Props> = ({ name, order }) => {
    return (
        <TableContainer margin={"3px"} >
            <Table  size='sm' backgroundColor={"white"}>
                <Thead>
                    <Tr>
                        {name.map((item, index) => (
                            <Th height={"70px"} fontSize={"10px"}    textAlign={"center"} key={index}>{item}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {order.map((item, index) => (
                        <Tr  key={index}>
                            <Td height={"70px"} fontSize={"17px"}   lineHeight={"20px"} textAlign={"center"}  >{item.id}</Td>
                            <Td  height={"70px"} fontSize={"17px"}    textAlign={"center"}>{item.customerId}</Td>
                            <Td height={"70px"} fontSize={"17px"}    textAlign={"center"}>{item.time}</Td>
                            <Td height={"70px"} fontSize={"17px"}   flexWrap={"wrap"} textAlign={"center"}>{item.adres}</Td>
                            <Td height={"70px"} fontSize={"17px"}   textAlign={"center"}>{item.amount}</Td>
                            <Td height={"70px"} fontSize={"17px"}   textAlign={"center"}>{item.payment}</Td>
                            <Td height={"70px"} fontSize={"17px"}    textAlign={"center"}>{item.contact}</Td>
                            <Td display={"flex"} gap={"19px"} textAlign={"center"}><Image width={24} alt='products' height={24} src="/show.svg"/>
                            <Image width={18} alt='products' height={18} src="/delete.svg"/>
                            </Td>
                            
                            
                           
                            
                        </Tr>
                    ))}
                </Tbody>
            </Table>
           
        </TableContainer>
      

    );
};

export default TableForOrder;
