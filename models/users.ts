import mongoose from 'mongoose';
import { Schema, model } from 'mongoose'
import { User, ObjectInteraction, SpaceStats, Stats } from '../utilities/users'

const ObjectInteractionSchema = new Schema<ObjectInteraction>({
  objectId: String,
  mapId: String,
  count: Number
});

const StatsSchema = new Schema<Stats>({
  steps: Number,
  interactions: Number,
  objectInteractions: [ObjectInteractionSchema],
  messages: Number,
  isOnline: Boolean,
  lastJoined: Number,
  lastExited: Number,
  timeOnlineInMinutes: Number
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
  spaces: {
    type: Map,
    of: StatsSchema
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)