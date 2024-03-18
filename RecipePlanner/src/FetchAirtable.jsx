import React, { useEffect, useState } from "react";
import { airtableBase } from "./Airtable.jsx";

const FetchAirtable = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await airtableBase("table").select().all();
        setRecords(response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  //console.log("record.id;", records[0].id);

  return (
    <div>
      <div className="">Recommended for you:</div>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <div>
              <img src={record.fields.image[0].url} />
              <h5>{record.fields.image.url}</h5>
              <h5>{record.fields.title}</h5>
              <p>{record.fields.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAirtable;
