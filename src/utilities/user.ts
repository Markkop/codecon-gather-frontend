import { User } from '../types/user'

export function getUserSpaceStatsByDate (user: User, date: string) {
  return Object.entries(user.spacesByDate[date]).map(([spaceName, spaceStats]) => ({
    spaceName,
    steps: spaceStats.steps || 0,
    interactions: spaceStats.interactions || 0,
    messages: spaceStats.messages || 0,
    timeOnlineInMinutes: spaceStats.timeOnlineInMinutes || 0
  }))
}

export function getAllTimeUserSpaceStats (user: User) {
  const dates = Object.keys(user.spacesByDate)
  const allSpacesStats = dates.map(date => getUserSpaceStatsByDate(user, date)).flat()
  return allSpacesStats.reduce((acc, spaceStats) => {
    const space = acc.find(space => space.spaceName === spaceStats.spaceName)
    if (!space) return acc.concat(spaceStats)

    space.steps += spaceStats.steps || 0
    space.interactions += spaceStats.interactions || 0
    space.messages += spaceStats.messages || 0
    space.timeOnlineInMinutes += spaceStats.timeOnlineInMinutes || 0
    return acc
  }, [])
}

export function getAllTimeSpaceStats (users: User[]) {
  const allSpacesStatsForAllUsers = users.map(user => getAllTimeUserSpaceStats(user)).flat()
  return allSpacesStatsForAllUsers.reduce((acc, spaceStats) => {
    const space = acc.find(space => space.spaceName === spaceStats.spaceName)
    if (!space) return acc.concat(spaceStats)

    space.steps += spaceStats.steps || 0
    space.interactions += spaceStats.interactions || 0
    space.messages += spaceStats.messages || 0
    space.timeOnlineInMinutes += spaceStats.timeOnlineInMinutes || 0
    return acc
  }, [])
}

export function getUserStatsByDateOnAllSpaces (user: User) {
  return Object.entries(user.spacesByDate).reduce((acc, [date, spaceStats]) => {
    const stats = Object.values(spaceStats).reduce((dateStats: any, stat) => {
      return {
        date: dateStats.date || date,
        steps: (stat.steps || 0) + (dateStats.steps || 0),
        interactions: (stat.interactions || 0) + (dateStats.interactions || 0),
        messages: (stat.messages || 0) + (dateStats.messages || 0),
        timeOnlineInMinutes: (stat.timeOnlineInMinutes || 0) + (dateStats.timeOnlineInMinutes || 0)
      }
    }, {})

    return acc.concat(stats)
  }, [])
}

export function getAllUsersStatsByDate (users: User[]) {
  const allUsersStatsOnAllSpacesByDate = users.map(user => getUserStatsByDateOnAllSpaces(user)).flat()
  return allUsersStatsOnAllSpacesByDate.reduce((acc, dateStats) => {
    const date = acc.find(accDateStats => accDateStats.date === dateStats.date)
    if (!date) return acc.concat(dateStats)

    date.steps += dateStats.steps || 0
    date.interactions += dateStats.interactions || 0
    date.messages += dateStats.messages || 0
    date.timeOnlineInMinutes += dateStats.timeOnlineInMinutes || 0
    return acc
  }, [])
}

export function getSpacesNames (users: User[]) {
  const allTimeSpaceStats = getAllTimeSpaceStats(users)
  return allTimeSpaceStats.map(spaceStats => spaceStats.spaceName)
}

export function getDates (users: User[]) {
  const allTimeSpaceStats = getAllUsersStatsByDate(users)
  return allTimeSpaceStats.map(spaceStats => spaceStats.date)
}
