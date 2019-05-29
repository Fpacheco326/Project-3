const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String, required: true },
  time: { type: Array, required: false },
  date: { type: Date, default: Date.now }
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
