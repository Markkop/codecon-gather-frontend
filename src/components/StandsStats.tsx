import { User } from '../types/user'
import { getStandStats } from '../utilities/user'

const standImages = {
  LinuxTips: 'https://i.imgur.com/kzTWqxn.png',
  Tractian: 'https://i.imgur.com/L6Yj5sI.png',
  Unico: 'https://i.imgur.com/HLL1YRU.png',
  Trybe: 'https://i.imgur.com/NL7EVES.png',
  DevsCansados: 'https://i.imgur.com/3TbIXlN.png',
  DVLPR: 'https://i.imgur.com/t0vyMaw.png',
  GenioDesks: 'https://i.imgur.com/8HuaTWn.png',
  'Casa do Código': 'https://i.imgur.com/VpE9tdC.png',
  Gather: 'https://i.imgur.com/0e3aTd7.png',
  JetBrains: 'https://i.imgur.com/0vwsF2z.png',
  seila: 'https://i.imgur.com/UZ3HRBd.png',
  Revelo: 'https://i.imgur.com/TZD3WyR.png',
  GbTech: 'https://i.imgur.com/ncXDpRS.png',
  default: 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/DfVMRgRjpjJSoK5y/8IQHEaoJOpogX22xI30T8U'
}

type StandStatsProps = {
  users: User[]
}

export function StandStats ({ users }: StandStatsProps) {
  const stands = getStandStats(users)
  return (
    <section>
      <h1>Stands Stats</h1>
      <div className='m-2 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
        {stands.map(stand => {
          return (
            <div className='card w-full bg-base-100 shadow-xl' key={stand.standName}>
              <figure className='bg-black '>
                <img src={standImages[stand.standName] || standImages.default} alt={stand.standName} className='h-40 object-cover' />
              </figure>
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
