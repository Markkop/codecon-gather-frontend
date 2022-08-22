import { useEffect, useState } from 'react'
import { UserCard } from '../components/UserCard'
import { friendlySpaceName } from '../data/spaces'
import { User } from '../types/user'
import { getUsers } from '../utilities/api'
import { getDates, getSpacesNames } from '../utilities/user'

export default function HomePage () {
  const [users, setUsers] = useState<User[]>([])

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
            {spaces.map((space) => (
              <div className='collapse' key={space}>
                <input type='checkbox' />
                <div className='collapse-title text-xl font-medium'>
                  {friendlySpaceName[space]} 🔽
                </div>
                <div className='collapse-content'>
                  <div className='m-2 grid grid-cols-3 gap-2 lg:grid-cols-6'>
                    {users &&
                  users
                    .filter((user) => user.spacesByDate?.[date]?.[space])
                    .map((user) => <UserCard user={user} space={space} date={date} key={user.gatherPlayerId} />)}
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
