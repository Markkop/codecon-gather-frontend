import { User } from '../utilities/users';

type Props = {
  user: User;
  space: string;
  date: string
};

export function UserCard({ user, space, date }: Props) {

  const userSpace = user.spacesByDate[date][space];

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={`https://robohash.org/${user.gatherPlayerId}`} alt={user.gatherName} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.gatherName}
            {userSpace.isOnline && (
              <div className="badge bg-green-600">ONLINE</div>
            )}
        </h2>
        <ul>
          <li>Passos: {userSpace.steps}</li>
          <li>
            Interações: {userSpace.interactions}{' '}
            {`(${userSpace.objectInteractions?.length} objetos)`}
          </li>
          <li>Mensagens: {userSpace.messages}</li>
          <li>Tempo Online: {userSpace.timeOnlineInMinutes?.toFixed(0)} minutos</li>
        </ul>
      </div>
    </div>
  )
}
