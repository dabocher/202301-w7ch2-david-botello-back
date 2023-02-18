import mongoose from "mongoose";

const robotSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  stats: {
    speed: Number,
    endurance: Number,
    creationDate: Number,
  },
});

const Robot = mongoose.model("Robot", robotSchema);

export default Robot;
