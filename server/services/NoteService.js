import mongoose from "mongoose";
import ApiError from "../utils/ApiError";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getNotesByBugId(bugId) {
    let data = await _repository.find({ bugId: bugId });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async createNote(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async deleteNote(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const noteService = new NoteService();
export default noteService;
