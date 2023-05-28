import { connection, connect } from 'mongoose'
import UserModel from '../models/users'
import { User } from '../types/user'

async function connectDatabase () {
  try {
    if (connection.readyState === 0) {
      const isProd = process.env.IS_ON_VERCEL === 'true'
      const env = isProd ? 'prod' : 'dev'
      connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/gather-${env}?retryWrites=true&w=majority`)
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getAllUsers (): Promise<User[]> {
  try {
    await connectDatabase()
    const allusers = await UserModel.find({}).lean() as User[]
    const users = allusers.filter(user => {
      const spacesByDate = Object.keys(user.spacesByDate)
      const spacesByDate2022 = spacesByDate.filter(date => date.split('/')[2] === '2023')
      return spacesByDate2022.length > 0
    })
    return users
  } catch (error) {
    console.log(error)
    return []
  }
}
