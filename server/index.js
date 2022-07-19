require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const { Record } = require("./models/Record");

mongoose
  .connect(
    `mongodb+srv://admin-raviraj:${process.env.MONGO_DB_PASSWORD}@cluster0.lkxsz.mongodb.net/SIH?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("Oh no! Mongo connection error");
    console.log(err);
  });

app.use(
  cors({
    origin: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const createRecord = async (req, res) => {
  const { MQ2, level, temperature, humidity } = req.body;

  const time = Date.now();
  console.log(MQ2, temperature, humidity, level, time);
  const newRecord = await Record.create({
    MQ2,
    level,
    temperature,
    humidity,
    time,
  });
  console.log(newRecord);
  res.status(200).json({
    message: "Successfully created the record",
  });
};

const records = async (req, res) => {
  const records = await Record.find({});
  res.status(200).json({
    records,
  });
};

app.get("/record", records);
app.post("/record", createRecord);
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello world</h1>");
});

const deleteMany = async () => {
  await Record.deleteMany({});
  console.log("Records deleted");
};

// deleteMany();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
