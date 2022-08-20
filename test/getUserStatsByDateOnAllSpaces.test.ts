import { User } from '../src/types/user'
import { getAllUsersStatsByDate, getUserStatsByDateOnAllSpaces } from '../src/utilities/user'

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

describe('User Stats by Date on All Spaces', () => {
  it('getUserStatsByDateOnAllSpaces', () => {
    expect(getUserStatsByDateOnAllSpaces(users[0])).toMatchObject([
      {
        date: '19/08/2022',
        steps: 50,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 5.549266666666665
      },
      {
        date: '20/08/2022',
        steps: 20,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 1.2746333333333326
      }
    ])
  })

  it('getAllUsersStatsByDate', () => {
    expect(getAllUsersStatsByDate(users)).toMatchObject([
      {
        date: '19/08/2022',
        steps: 50,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 5.549266666666665
      },
      {
        date: '20/08/2022',
        steps: 24,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 2.5492666666666652
      },
      {
        date: '21/08/2022',
        steps: 50,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 5.549266666666665
      }
    ])
  })
})
