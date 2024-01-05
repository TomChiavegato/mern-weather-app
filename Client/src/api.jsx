import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        setBackendData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(backendData.users);
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}
