import { User } from '../types/user'
import { getSpaceStatsByDate } from '../utilities/user'
import { SpaceCard } from './SpaceCard'

type SpaceStatsByDateProps = {
  users: User[]
  date: string
}

export function SpaceStatsByDate ({ users, date }: SpaceStatsByDateProps) {
  const allTimeSpaceStats = getSpaceStatsByDate(users, date)
  return (
    <section>
      <h1>Stats for {date}</h1>
      <div className='m-2 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
        {allTimeSpaceStats.map(space => <SpaceCard space={space} key={space.spaceName} />)}
      </div>
    </section>
  )
}
