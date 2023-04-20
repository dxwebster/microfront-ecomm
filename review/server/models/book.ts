import mongoose, { Document, Schema } from "mongoose"
import { Book } from "../types"

export type BookDocument = Document & Book

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
})

export const BookModel = mongoose.model<BookDocument>("Book", bookSchema)
