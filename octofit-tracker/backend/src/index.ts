import express from 'express'
import mongoose from 'mongoose'
import User from './models/User'

const app = express()
const PORT = Number(process.env.PORT ?? 8000)
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit'

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API is running', port: PORT })
})

app.get('/api/users', async (_req, res) => {
  const users = await User.find().select('-__v')
  res.json(users)
})

app.post('/api/users', async (req, res) => {
  const newUser = new User(req.body)
  const savedUser = await newUser.save()
  res.status(201).json(savedUser)
})

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`)
      console.log(`Connected to MongoDB at ${MONGODB_URI}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed', error)
    process.exit(1)
  })
