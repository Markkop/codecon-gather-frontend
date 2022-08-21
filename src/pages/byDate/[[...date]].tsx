import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SpaceStatsByDate } from '../../components/SpaceStatsByDate'
import { StandStats } from '../../components/StandsStats'
// import { StandStats } from '../components/StandsStats'
import { User } from '../../types/user'
import { getUsers } from '../../utilities/api'
import { isValidDate } from '../../utilities/dates'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import { routes } from '../../components/Header'
registerLocale('pt-BR', ptBR)

function parseDate (date: Date) {
  const todayDateString = new Date(date).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  return todayDateString.split(' ')[0]
}

export default function ByDatePage () {
  const [users, setUsers] = useState<User[]>([])
  const [rawDate, setRawDate] = useState(new Date())
  const [date, setDate] = useState(parseDate(new Date()))

  const router = useRouter()
  const queryParamDate = String(router.query?.date).replace(/-|\./g, '/')

  useEffect(() => {
    if (!isValidDate(queryParamDate)) return
    setDate(queryParamDate)
    setRawDate(new Date(Date.parse(queryParamDate.split('/').reverse().join('/'))))
  }, [queryParamDate])

  useEffect(() => {
    getUsers().then(setUsers).catch(console.log)
  }, [])

  return (
    <>
      <div className='flex'>
        <div className='mx-auto justify-center'>
          <DatePicker
            selected={rawDate}
            onChange={(date:Date) => {
              setRawDate(date)
              setDate(parseDate(date))
              router.push({ pathname: `${routes.convert.path}/${parseDate(date).replace(/\//g, '-')}` }, undefined, { shallow: true })
            }}
            dateFormat='P'
            locale='pt-BR'
            className='text-center'
          />
        </div>
      </div>
      <SpaceStatsByDate users={users} date={date} />
      <StandStats users={users} date={date} />
    </>
  )
}
