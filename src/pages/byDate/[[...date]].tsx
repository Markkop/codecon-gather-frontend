import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SpaceStatsByDate } from '../../components/SpaceStatsByDate'
import { StandStats } from '../../components/StandsStats'
// import { StandStats } from '../components/StandsStats'
import { User } from '../../types/user'
import { getUsers } from '../../utilities/api'
import { isValidDate } from '../../utilities/dates'

export default function ByDatePage () {
  const [users, setUsers] = useState<User[]>([])
  const [date, setDate] = useState(null)

  const router = useRouter()
  const queryParamDate = String(router.query?.date).replace(/-|\./g, '/')

  useEffect(() => {
    if (!isValidDate(queryParamDate)) return
    setDate(queryParamDate)
  }, [queryParamDate])

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log)
  }, [])

  return (
    <>
      <SpaceStatsByDate users={users} date={date} />
      <StandStats users={users} date={date} />
    </>
  )
}
