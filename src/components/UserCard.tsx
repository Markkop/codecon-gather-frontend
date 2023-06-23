import { User } from '../types/user'
import { getUserStatsForDate } from '../utilities/user'

type Props = {
  user: User;
  space: string;
  date: string;
  total?: boolean;
};

export function UserCard ({ user, space, date, total = false }: Props) {
  let userSpace
  if (total) {
    userSpace = getUserStatsForDate(user, date)
  } else {
    userSpace = user.spacesByDate[date][space]
  }

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
          <li>👣 {userSpace.steps || 0}</li>
          <li>🤏 {userSpace.interactions || 0}</li>
          <li>💬 {userSpace.messages || 0}</li>
          <li>🕒 {userSpace.timeOnlineInMinutes?.toFixed(0)} min</li>
        </ul>
      </div>
    </div>
  )
}
