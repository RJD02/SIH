import axios from "axios";

export const getRecords = async () => {
  try {
    let data = await axios.get("https://young-dawn-87102.herokuapp.com/record");
    data = await data.data;
    return data.records;
  } catch (err) {
    console.log(err);
    return [];
  }
};
