import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { User } from '../utilities/users';

type Props = {
  user: User;
  space: string;
  date: string
};

export function UserCard({ user, space, date }: Props) {
  const theme = useMantineTheme();
  const userSpace = user.spacesByDate[date][space];

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm">
        <Card.Section>
          <Image
            src={`https://robohash.org/${user.gatherPlayerId}`}
            height={160}
            alt={user.gatherName}
          />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{user.gatherName}</Text>
          {userSpace.isOnline && (
            <Badge color="green" variant="light">
              Online
            </Badge>
          )}
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          <ul>
            <li>Passos: {userSpace.steps}</li>
            <li>
              Interações: {userSpace.interactions}{' '}
              {`(${userSpace.objectInteractions?.length} objetos)`}
            </li>
            <li>Mensagens: {userSpace.messages}</li>
            <li>Tempo Online: {userSpace.timeOnlineInMinutes?.toFixed(0)} minutos</li>
          </ul>
        </Text>
      </Card>
    </div>
  );
}
