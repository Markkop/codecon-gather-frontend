import { User } from '../types/user'
import { getAllTimeSpaceStats } from '../utilities/user'

const spaceImage = {
  'codecon-2022-sala-1': 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/DfVMRgRjpjJSoK5y/8IQHEaoJOpogX22xI30T8U',
  default: 'codecon-2022-sala-1'
}
type AllTimeSpacesStatsProps = {
  users: User[]
}

export function AllTimeSpacesStats ({ users }: AllTimeSpacesStatsProps) {
  const allTimeSpaceStats = getAllTimeSpaceStats(users)
  return (
    <section>
      <h1>All Time Stats</h1>
      {allTimeSpaceStats.map(space => {
        return (
          <div className='card w-96 bg-base-100 shadow-xl' key={space.spaceName}>
            <figure><img src={spaceImage[space.spaceName]} alt={space.spaceName} /></figure>
            <div className='card-body'>
              <h2 className='card-title'>
                {space.spaceName}
              </h2>
              <li>Passos: {space.steps}</li>
              <li>
                Interações: {space.interactions}
              </li>
              <li>Mensagens: {space.messages}</li>
              <li>Tempo Online: {space.timeOnlineInMinutes?.toFixed(0)} minutos</li>
            </div>
          </div>
        )
      })}
    </section>
  )
}
