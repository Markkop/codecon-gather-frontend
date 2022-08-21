import { User } from '../types/user'
import { getAllTimeSpaceStats } from '../utilities/user'

const spaceImage = {
  'codecon-2022-sala-1': 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/DfVMRgRjpjJSoK5y/8IQHEaoJOpogX22xI30T8U',
  'codecon-2022-sala-2': 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/aqQVlXTpX2ISp0ci/vKwJlXWj9VOLR4YIxUUIbP',
  'codecon-2022-sala-3': 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/ZXHxMgrgOseuus8N/kD40z9BtpsJwb3IPIR7uND',
  'codecon-2022-happyhour-1': 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/mWkpadGDx6dBTlDv/HTTtAn4ezeHLXed9EB5PGH',
  'codecon-2022-happyhour-2': 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/aL93ZLLie7531JYj/37qNMI9JIkPwNCvN6ftOUy',
  'Codecon-2022': 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/VSqg1CcrGZHUwtaT/NLRDMJxcjLIUVic4XZFxeU',
  default: 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/DfVMRgRjpjJSoK5y/8IQHEaoJOpogX22xI30T8U'
}

const friendlySpaceName = {
  'codecon-2022-sala-1': 'Sala 1',
  'codecon-2022-sala-2': 'Sala 2',
  'codecon-2022-sala-3': 'Sala 3',
  'codecon-2022-happyhour-1': 'HH 1',
  'codecon-2022-happyhour-2': 'HH 1',
  'Codecon-2022': 'Intro'
}

type AllTimeSpacesStatsProps = {
  users: User[]
}

export function AllTimeSpacesStats ({ users }: AllTimeSpacesStatsProps) {
  const allTimeSpaceStats = getAllTimeSpaceStats(users)
  return (
    <section>
      <h1>All Time Stats</h1>
      <div className='m-2 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
        {allTimeSpaceStats.map(space => {
          return (
            <div className='card w-full bg-base-100 shadow-xl' key={space.spaceName}>
              <figure><img src={spaceImage[space.spaceName] || spaceImage.default} alt={space.spaceName} /></figure>
              <div className='card-body text-sm'>
                <h2 className='card-title text-sm'>
                  {friendlySpaceName[space.spaceName] || space.spaceName}
                </h2>
                <ul>

                  <li>👣 {space.steps}</li>
                  <li>🤏 {space.interactions}</li>
                  <li>💬 {space.messages}</li>
                  <li>🕒 {space.timeOnlineInMinutes?.toFixed(0)} min</li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
