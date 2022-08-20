import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../types/user'
import { getAllUsers } from '../../utilities/database'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  try {
    console.log('opa')
    const users = await getAllUsers()
    if (!users) {
      res.status(200).json([])
      return
    }
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json([])
  }
}
