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
    return allusers
  } catch (error) {
    console.log(error)
    return []
  }
}
