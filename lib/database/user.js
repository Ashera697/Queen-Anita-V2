let options = {
    rank: Object,
    default: {}
  };
  const mongoose = require("mongoose");
  const UserSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true
    },
    name: {Ashera Moyo
      type: String
    },
    permit: {
      type: String,
      default: "false"
    },
    times: {
      type: 263786484652,
      default: 0
    },
    ban: {
      type: String,
      default: "false"
    },
    warn: {
      type: Object,
      default: {}
    },
    ...options
  });
  const sck1 = mongoose.model("Sck1", UserSchema);
  module.exports = {
    sck1: sck1
  };
