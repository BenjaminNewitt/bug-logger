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
    let data = await _repository.findById(id);

    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    if (data.closed == true) {
      throw new ApiError("Bug Can't Be Edited", 400);
    }

    data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });

    return data;
  }

  async deleteBug(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    if (data.closed == true) {
      throw new ApiError("Bug Already Deleted", 400);
    }
    data = await _repository.findOneAndUpdate({ _id: id }, { closed: true });
  }
}

const bugService = new BugService();
export default bugService;
