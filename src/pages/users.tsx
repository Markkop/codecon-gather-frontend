import { useEffect, useState } from 'react'
import { UserCard } from '../components/UserCard'
import { User } from '../types/user'
import { getUsers } from '../utilities/api'
import { getDates, getSpacesNames, getUserStatsForDate } from '../utilities/user'

export default function HomePage () {
  const [users, setUsers] = useState<User[]>([])
  const [sortProperty, setSortProperty] = useState('steps')

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log)
  }, [])

  const spaces = getSpacesNames(users)
  const dates = getDates(users).sort((a: string, b: string) => {
    return Date.parse(b.split('/').reverse().join('/')) - Date.parse(a.split('/').reverse().join('/'))
  })

  return (
    <>
      {dates.map(date => (
        <div className='collapse' key={date}>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            {date} 🔽
          </div>
          <div className='collapse-content'>
            {spaces.concat(['All']).map((space) => (
              <div className='collapse' key={space}>
                <input type='checkbox' />
                <div className='collapse-title text-xl font-medium'>
                  {space === 'All' ? 'All Spaces' : space} 🔽
                </div>
                <div className='collapse-content'>
                  <div><a onClick={() => setSortProperty('steps')}>By Steps</a></div>
                  <div><a onClick={() => setSortProperty('interactions')}>By Interactions</a></div>
                  <div><a onClick={() => setSortProperty('messages')}>By Messages</a></div>
                  <div><a onClick={() => setSortProperty('timeOnlineInMinutes')}>By Online Time</a></div>                  <div className='m-2 grid grid-cols-3 gap-2 lg:grid-cols-6'>
                    {users &&
                  users
                    .filter((user) => space === 'All' || user.spacesByDate?.[date]?.[space])
                    .sort((a: User, b: User) => {
                      if (space === 'All') {
                        return (getUserStatsForDate(b, date)?.[sortProperty] || 0) - (getUserStatsForDate(a, date)?.[sortProperty] || 0)
                      }
                      return (b.spacesByDate?.[date]?.[space]?.[sortProperty] || 0) - (a.spacesByDate?.[date]?.[space]?.[sortProperty] || 0)
                    })
                    .map((user) => <UserCard user={user} space={space} date={date} key={user.gatherPlayerId} total={space === 'All'} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
