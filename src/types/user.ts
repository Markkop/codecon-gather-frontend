export type ObjectInteraction = {
  objectId: string,
  mapId: string,
  count: number
}

export type Stats = {
  steps?: number,
  interactions?: number,
  objectInteractions?: ObjectInteraction[],
  messages?: number,
  isOnline?: boolean,
  lastJoined?: number,
  lastExited?: number,
  timeOnlineInMinutes?: number
}

export type SpaceStats = Record<string, Stats>

export type SpacesByDate = Record<string, SpaceStats>

export type User = {
  gatherPlayerId: string
  gatherName: string
  spacesByDate: SpacesByDate
}
