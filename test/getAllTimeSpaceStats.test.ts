import { User } from '../src/types/user'
import { getAllTimeSpaceStats, getAllTimeUserSpaceStats, getUserSpaceStatsByDate } from '../src/utilities/user'

const users = [
  {
    gatherPlayerId: 'hoEDIihsFFglhwMkCoAYfQpYItA2',
    gatherName: 'Mark',
    spacesByDate: {
      '19/08/2022': {
        'codecon-2022-sala-1': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 2.2746333333333326,
          steps: 10,
          lastExited: 1661023883057
        },
        'codecon-2022-sala-2': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 3.2746333333333326,
          steps: 40,
          lastExited: 1661023883057
        }
      },
      '20/08/2022': {
        'codecon-2022-sala-1': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 1.2746333333333326,
          steps: 20,
          lastExited: 1661023883057
        }
      }
    }
  },
  {
    gatherPlayerId: 'hoEDIihsFFglhwMkCoAYfQpYItA3',
    gatherName: 'Karm',
    spacesByDate: {
      '20/08/2022': {
        'codecon-2022-sala-1': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 1.2746333333333326,
          steps: 4,
          lastExited: 1661023883057
        }
      },
      '21/08/2022': {
        'codecon-2022-sala-1': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 2.2746333333333326,
          steps: 10,
          lastExited: 1661023883057
        },
        'codecon-2022-sala-2': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 3.2746333333333326,
          steps: 40,
          lastExited: 1661023883057
        }
      }
    }
  }
] as User[]

describe('All Time Space Stats', () => {
  it('getUserSpaceStatsByDate for 20/08/2022 in user[0]', () => {
    const userSpaceStatsFor200822 = getUserSpaceStatsByDate(users[0], '20/08/2022')
    expect(userSpaceStatsFor200822).toMatchObject([
      {
        spaceName: 'codecon-2022-sala-1',
        interactions: 0,
        messages: 0,
        steps: 20,
        timeOnlineInMinutes: 1.2746333333333326
      }
    ])
  })

  it('getUserSpaceStatsByDate for 19/08/2022 in user[0]', () => {
    const userSpaceStatsFor190822 = getUserSpaceStatsByDate(users[0], '19/08/2022')
    expect(userSpaceStatsFor190822).toMatchObject([
      {
        spaceName: 'codecon-2022-sala-1',
        steps: 10,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 2.2746333333333326
      },
      {
        spaceName: 'codecon-2022-sala-2',
        steps: 40,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 3.2746333333333326
      }
    ])
  })

  it('getAllTimeUserSpaceStats in user[0]', () => {
    const allTimeUserSpaceStats = getAllTimeUserSpaceStats(users[0])
    expect(allTimeUserSpaceStats).toMatchObject([
      {
        spaceName: 'codecon-2022-sala-1',
        steps: 30,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 3.5492666666666652
      },
      {
        spaceName: 'codecon-2022-sala-2',
        steps: 40,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 3.2746333333333326
      }
    ])
  })

  it('getAllTimeSpaceStats for all users', () => {
    const allTimeUserSpaceStats = getAllTimeSpaceStats(users)
    expect(allTimeUserSpaceStats).toMatchObject([
      {
        spaceName: 'codecon-2022-sala-1',
        steps: 44,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 7.0985333333333305
      },
      {
        spaceName: 'codecon-2022-sala-2',
        steps: 80,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 6.549266666666665
      }
    ])
  })
})
