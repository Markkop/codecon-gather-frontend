import { useEffect, useState } from 'react'
import { AllTimeSpacesStats } from '../components/AllTimeSpacesStats'
import { StandStats } from '../components/StandsStats'
import { UserCard } from '../components/UserCard'
import { User } from '../types/user'
import { getUsers } from '../utilities/api'
import { getDates, getSpacesNames } from '../utilities/user'

export default function HomePage () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log)
  }, [])

  return (
    <>
      <AllTimeSpacesStats users={users} />
      <StandStats users={users} />
    </>
  )
}
