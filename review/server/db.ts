import { connect } from "mongoose"

const MONGODB_URI = "mongodb://localhost:27017/myapp"

export const connectToDatabase = async () => {
  try {
    await connect(MONGODB_URI)
    console.log("🎸 Connected to MongoDB")
  } catch (error) {
    const err = error as any
    console.error(err.message)
    process.exit(1)
  }
}
