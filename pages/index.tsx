import { Title, Text, Anchor, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { UserCard } from '../components/UserCard';
import { getUsers } from '../utilities/api';
import { User } from '../utilities/users';
import { Select } from '@mantine/core';


export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log)
  }, []);

  function sortUsers(property: string) {
    if (!property) return
    const sortedUsers = [...users].sort((a: any,b: any)=> {
      return b[property] - a[property]
    })
    setUsers(sortedUsers)
  }

  return (
    <>
      <Select
        onChange={e => sortUsers(String(e))}
        label="Ordenação"
        placeholder="Escolha um"
        data={[
          { value: 'steps', label: 'Passos' },
          { value: 'interactions', label: 'Interações' },
          { value: 'timeOnlineInMinutes', label: 'Tempo online' },
          { value: 'messages', label: 'Mensagens' },
          { value: 'isOnline', label: 'Online' },
        ]}
      />
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        {users && users.map(user => <UserCard user={user} />)}
      </SimpleGrid>
    </>
  );
}
