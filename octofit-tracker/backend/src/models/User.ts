import { Schema, model, Document } from 'mongoose'

export interface User extends Document {
  username: string
  email: string
  createdAt: Date
}

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: () => new Date() },
  },
  { timestamps: true },
)

export default model<User>('User', userSchema)
