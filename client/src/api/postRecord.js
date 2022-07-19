import axios from "axios";

const postRecord = async (data) => {
  try {
    await axios.post(
      "http://localhost:5000",
      { ...data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
