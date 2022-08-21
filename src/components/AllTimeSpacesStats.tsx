import { User } from '../types/user'
import { getAllTimeSpaceStats } from '../utilities/user'
import { SpaceCard } from './SpaceCard'

type AllTimeSpacesStatsProps = {
  users: User[]
}

export function AllTimeSpacesStats ({ users }: AllTimeSpacesStatsProps) {
  const allTimeSpaceStats = getAllTimeSpaceStats(users)
  return (
    <section>
      <h1>All Time Stats</h1>
      <div className='m-2 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
        {allTimeSpaceStats.map(space => <SpaceCard space={space} key={space.spaceName} />)}
      </div>
    </section>
  )
}
