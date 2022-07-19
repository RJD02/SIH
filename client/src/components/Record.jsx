import React from "react";
import { useEffect, useState } from "react";
import moment from "moment";
import { getRecords } from "../api/getRecords";

const headings = ["Index", "MQ2", "Humidity", "Temperature", "Level", "Time"];

function Record() {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const setRecords = async () => {
      const recordsData = await getRecords();
      setData(recordsData);
    };
    setRecords();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headings.map((head) => (
              <th key={head} scope="col">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map((value, index) => (
                <tr key={value._id}>
                  <td>{index}</td>
                  <td>{value.MQ2}</td>
                  <td>{value.humidity}</td>
                  <td>{value.temperature}</td>
                  <td>{value.level}</td>
                  <td>{moment(value.time).fromNow()}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Record;
