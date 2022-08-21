import { User } from '../types/user'

type Props = {
  user: User;
  space: string;
  date: string
};

export function UserCard ({ user, space, date }: Props) {
  const userSpace = user.spacesByDate[date][space]

  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure><img src={`https://robohash.org/${user.gatherPlayerId}`} alt={user.gatherName} className='h-20 object-cover' /></figure>
      <div className='card-body text-sm'>
        <h2 className='card-title text-sm'>
          {user.gatherName}
          {userSpace.isOnline && (
            <div className='badge bg-green-600'>ONLINE</div>
          )}
        </h2>
        <ul>
          <li>👣 {userSpace.steps}</li>
          <li>🤏 {userSpace.interactions}</li>
          <li>💬 {userSpace.messages}</li>
          <li>🕒 {userSpace.timeOnlineInMinutes?.toFixed(0)} min</li>
        </ul>
      </div>
    </div>
  )
}
