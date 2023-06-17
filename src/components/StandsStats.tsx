import { User } from '../types/user'
import { getStandStats, getStandStatsByDate } from '../utilities/user'

type StandStatsProps = {
  users: User[],
  date?: string
}

export function StandStats ({ users, date }: StandStatsProps) {
  const stands = date ? getStandStatsByDate(users, date) : getStandStats(users)
  return (
    <section>
      <h1>Stands Stats</h1>
      <div className='m-2 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
        {stands.map(stand => {
          return (
            <div className='card w-full border border-black bg-base-100 shadow-xl' key={stand.standName}>
              <div className='card-body text-sm'>
                <h2 className='card-title text-sm'>
                  {stand.standName}
                </h2>
                <ul>
                  <li>🙋 {stand.uniqueVisitors || 0}</li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
