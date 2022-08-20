import mongoose from 'mongoose';
import { Schema } from 'mongoose'
import { User } from '../utilities/users'

const UserSchema = new Schema<User>({
  gatherPlayerId: {
    type: String,
    required: true
  },
  gatherName: {
    type: String,
    required: true
  },
  spacesByDate: {
    type: Schema.Types.Mixed
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)