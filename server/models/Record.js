const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  MQ2: Number,
  level: Number,
  humidity: Number,
  temperature: Number,
  time: {
    type: Date,
    default: Date.now(),
  },
});

const Record = mongoose.model("Record", recordSchema);

exports.Record = Record;
