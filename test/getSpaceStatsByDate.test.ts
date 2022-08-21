import { User } from '../src/types/user'
import { getSpaceStatsByDate } from '../src/utilities/user'

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
          lastExited: 1661023883057,
          standsVisited: [
            'Trybe'
          ]
        },
        'codecon-2022-sala-2': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 3.2746333333333326,
          steps: 40,
          lastExited: 1661023883057,
          standsVisited: [
            'SomeStand'
          ]
        }
      },
      '20/08/2022': {
        'codecon-2022-sala-1': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 1.2746333333333326,
          steps: 20,
          lastExited: 1661023883057,
          standsVisited: [
            'Trybe',
            'Linux Tips'
          ]
        },
        'codecon-2022-sala-3': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 3.2746333333333326,
          steps: 40,
          lastExited: 1661023883057,
          standsVisited: [
            'StandSala3'
          ]
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
          lastExited: 1661023883057,
          standsVisited: [
            'Trybe',
            'Linux Tips'
          ]
        },
        'codecon-2022-sala-2': {
          isOnline: false,
          lastJoined: 1661023805684,
          timeOnlineInMinutes: 3.2746333333333326,
          steps: 40,
          lastExited: 1661023883057,
          standsVisited: [
            'SomeStand'
          ]
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

describe('Space Stats by Date', () => {
  it('getSpaceStatsByDate for 20/08/2022', () => {
    const userSpaceStatsFor200822 = getSpaceStatsByDate(users, '20/08/2022')
    expect(userSpaceStatsFor200822).toEqual([
      {
        spaceName: 'codecon-2022-sala-1',
        steps: 24,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 2.5492666666666652,
        standsVisited: ['Trybe', 'Linux Tips'],
        stands: { Trybe: 2, 'Linux Tips': 2 },
        uniqueVisitors: 2
      },
      {
        spaceName: 'codecon-2022-sala-3',
        steps: 40,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 3.2746333333333326,
        standsVisited: ['StandSala3'],
        stands: { StandSala3: 1 },
        uniqueVisitors: 1
      },
      {
        spaceName: 'codecon-2022-sala-2',
        steps: 40,
        interactions: 0,
        messages: 0,
        timeOnlineInMinutes: 3.2746333333333326,
        standsVisited: ['SomeStand'],
        stands: { SomeStand: 1 },
        uniqueVisitors: 1
      }
    ])
  })
})
