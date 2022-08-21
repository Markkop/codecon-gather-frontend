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
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
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
