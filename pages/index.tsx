import { Title, Text, Anchor, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { UserCard } from '../components/UserCard';
import { getUsers } from '../utilities/api';
import { User } from '../utilities/users';


export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log)
  }, []);

  return (
    <>
      <SimpleGrid cols={3}>
        {users && users.map(user => <UserCard user={user} />)}
      </SimpleGrid>
    </>
  );
}
