import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
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
              <td
                className='text-center h-12 text-base'
                style={{ verticalAlign: 'middle' }}
              >
                {item.Image ? (
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={item.Image}
                      alt={item.Name}
                      style={{ width: '40px', height: '40px' }}
                    />
                  </Box>
                ) : (
                  'No Image'
                )}
              </td>
              <td className='text-center h-12 text-base'>{item.Name}</td>
              <td className='text-center h-12 text-base'>{item.Slog}</td>
              <td className='text-right pr-2 g-2'>
                <IconButton
                  aria-label='Edit'
                  icon={<EditIcon />}
                  size='sm'
                  color='teal'
                  variant="unstyled"
                  
                />
                <IconButton
                  aria-label='Delete'
                  icon={<DeleteIcon />}
                  size='sm'
                  color='red'
                  variant="unstyled"
                  
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
