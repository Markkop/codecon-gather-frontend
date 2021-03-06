import { Title, Text, Anchor, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { UserCard } from '../components/UserCard';
import { getUsers } from '../utilities/api';
import { User } from '../utilities/users';
import { Select } from '@mantine/core';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log);
  }, []);

  function sortUsers(property: string) {
    if (!property) return;
    const sortedUsers = [...users].sort((a: any, b: any) => {
      return b[property] - a[property];
    });
    setUsers(sortedUsers);
  }

  function getDates() {
    return users.reduce((dates: string[], user): string[] => {
      const spacesByDate = user.spacesByDate || {};
      delete spacesByDate._id;
      const spacesByDateKeys = Object.keys(spacesByDate || {});
      const allDates = dates.concat(spacesByDateKeys);
      return [...new Set(allDates)];
    }, []);
  }

  function getSpaces() {
    return users.reduce((spaces: string[], user): string[] => {
      const dateSpaces = getDates().reduce((dateSpaces: string[], date) => {
        const userDateSpaces = user.spacesByDate[date] || {};
        delete userDateSpaces._id;
        const userDateSpacesKeys = Object.keys(userDateSpaces || {});
        const allDateSpaces = dateSpaces.concat(userDateSpacesKeys);
        return [...new Set(allDateSpaces)];
      }, [])
      const allSpaces = spaces.concat(dateSpaces);
      return [...new Set(allSpaces)];
    }, []);
  }

  const spaces = getSpaces();
  const dates = getDates()

  return (
    <>
      {dates.map(date => (
        <div key={date}>
          {date}
          {spaces.map((space) => (
            <div key={space}>
              {space}
              <Select
                onChange={(e) => sortUsers(String(e))}
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
                {users &&
                  users
                    .filter((user) => {
                      return user.spacesByDate && user.spacesByDate[date][space];
                    })
                    .map((user) => <UserCard user={user} space={space} date={date} />)}
              </SimpleGrid>
            </div>
          ))}
        </div>
        )
      )}
    </>
  );
}


