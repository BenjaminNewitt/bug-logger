import mongoose from "mongoose";
import ApiError from "../utils/ApiError";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async createBug(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async editBug(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }

    return data;
  }

  async deleteBug(id) {
    // NOTE soft delete
    let data = await _repository.findOneAndUpdate({ _id: id }, { close: true });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const bugService = new BugService();
export default bugService;
