import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { User } from '../utilities/users';

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm">
      <Card.Section>
          <Image src={`https://robohash.org/${user.gatherPlayerId}`} height={160} alt={user.gatherName} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{user.gatherName}</Text>
          {user.isOnline && <Badge color="green" variant="light">
            Online
          </Badge>}
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          <ul>
            <li>Passos: {user.steps}</li>
            <li>Interações: {user.interactions} {`(${user.objectInteractions?.length} objetos)`}</li>
            <li>Mensagens: {user.messages}</li>
            <li>Tempo Online: {user.timeOnlineInMinutes?.toFixed(0)} minutos</li>
          </ul>
        </Text>
      </Card>
    </div>
  );
}
