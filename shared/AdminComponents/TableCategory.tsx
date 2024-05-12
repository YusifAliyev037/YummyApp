import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

interface Props {
  name: string[];
  order: Order[];
}

interface Order {
  Id: number;
  Image: string;
  Name: string;
  Slog: string;
}

const TableCategory: React.FC<Props> = ({ name, order }) => {
  return (
    <div className='m-3'>
      <table className='w-full bg-white'>
        <thead>
          <tr>
            {name.map((item, index) => (
              <th
                key={index}
                className={`py-4 ${
                  index === 0 ? 'text-lg' : 'text-md'
                } text-center`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr key={index}>
              <td className='text-center h-12 text-base'>{item.Id}</td>
              <td className='text-center h-12 text-base'>{item.Image}</td>
              <td className='text-center h-12 text-base'>{item.Name}</td>
              <td className='text-center h-12 text-base'>{item.Slog}</td>
              <td className='text-right'>
                <IconButton
                  aria-label='Edit'
                  icon={<EditIcon />}
                  size='sm'
                />
                <IconButton
                  aria-label='Delete'
                  icon={<DeleteIcon />}
                  size='sm'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCategory;
