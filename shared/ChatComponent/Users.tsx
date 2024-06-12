import React, { useEffect, useState } from 'react';
import { db } from '@/server/configs/firebase';
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';

interface User {
  id: string;
  email: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  console.log(users);
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'users-hash-password'));
        const fetchedUsers: User[] = [];
        querySnapshot.forEach((doc) => {
          fetchedUsers.push({ id: doc.id, ...doc.data() } as User);
        });
        setUsers(fetchedUsers);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    
    fetchUsers();
  }, []);

  return (
    <div className='overflow-y-scroll bg-pink10 h-420  '>
      <h1 className='ml-4 font-bold text-lg'>Users</h1>
      <ul>
        {users.map(user => (
          <li className='flex gap-3 p-5 hover:bg-pink cursor-pointer ' key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
