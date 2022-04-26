import React, { useState } from "react";
export default function App() {
  const [isData, setData] = useState("");
  const [isReserve, setReserve] = useState("");

  const getData = async () => {
    const wallet = "CuyWxHUhBaSYF8kUF4SeAHXVoHhaSJTL92x4MZSW8446";
    const data = await fetch(
      `https://api-test-solana.herokuapp.com/whitelisted/member/${wallet.toString()}`
    ).then((res) => {
      return res.json();
    });
    setData(data.member);
    setReserve(data.reserve);
    console.log(data);
  };

  const updateData = async () => {
    const wallet = "CuyWxHUhBaSYF8kUF4SeAHXVoHhaSJTL92x4MZSW8446";
    const reserve = 2;
    const data = await fetch(
      `https://api-test-solana.herokuapp.com/whitelisted/update/${wallet.toString()}/Test123`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
        },
        body: reserve.toString(),
      }
    ).then((res) => {
      return res.json();
    });
    setReserve(data.reserve);
  };
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={getData}>Fetch Data</button>
      <p>{isData}</p>
      <p>{isReserve}</p>
      <button onClick={updateData}>Update</button>
    </div>
  );
}
