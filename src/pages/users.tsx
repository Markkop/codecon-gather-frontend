import { useEffect, useState } from 'react'
import { UserCard } from '../components/UserCard'
import { User } from '../types/user'
import { getUsers } from '../utilities/api'
import { getDates, getSpacesNames } from '../utilities/user'

export default function HomePage () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log)
  }, [])

  const spaces = getSpacesNames(users)
  const dates = getDates(users)

  return (
    <>
      {dates.map(date => (
        <div key={date}>
          {date}
          {spaces.map((space) => (
            <div key={space}>
              {space}
              <div className='m-2 grid grid-cols-3 gap-2 lg:grid-cols-6'>
                {users &&
                  users
                    .filter((user) => {
                      return user.spacesByDate && user.spacesByDate[date][space]
                    })
                    .map((user) => <UserCard user={user} space={space} date={date} key={user.gatherPlayerId} />)}
              </div>
            </div>
          ))}
        </div>
      )
      )}
    </>
  )
}
