import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllUsers, User } from '../../utilities/users'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  try {
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
