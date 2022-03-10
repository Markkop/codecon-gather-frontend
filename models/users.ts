import mongoose from 'mongoose';
import { Schema, model } from 'mongoose'
import { User, ObjectInteraction } from '../utilities/users'

const ObjectInteractionSchema = new Schema<ObjectInteraction>({
  objectId: String,
  mapId: String,
  count: Number
});

const UserSchema = new Schema<User>({
  gatherPlayerId: {
    type: String,
    required: true
  },
  gatherName: {
    type: String,
    required: true
  },
  steps: {
    type: Number,
    default: 0
  },
  interactions: {
    type: Number,
    default: 0
  },
  objectInteractions: {
    type: [ObjectInteractionSchema],
    default: [],
  },
  messages: {
    type: Number,
    default: 0
  },
  isOnline: {
    type: Boolean,
    default: true
  },
  lastJoined: {
    type: Number,
    default: 0,
  },
  lastExited: {
    type: Number,
    default: 0,
  },
  timeOnlineInMinutes: {
    type: Number,
    default: 0
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)