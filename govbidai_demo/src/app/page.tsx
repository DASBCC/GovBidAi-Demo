"use client"

import { Stack } from "@mui/system";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const CardSample = dynamic(() => import("./components/CardSample"));


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch('https://jsonplaceholder.typicode.com/users');
      const response = await query.json();
      console.log(response);
      setData(response);
    }
    getData();
  }, []);

  return (
    <main className={styles.main}>
      <Stack sx = {{ border: 3, p : 3}} spacing={2}>
        <h1>GovBidAi Demo</h1>
        <p>Basic API call results:</p>
        {data && data.map((item, index) => {
          return (
            <CardSample key={index}>
              <label>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.address.street}</p>
                <p>{item.address.suite}</p>
                <p>{item.address.city}</p>
                <p>{item.address.zipcode}</p>
              </label>
            </CardSample>
          );
        }
        )}
      </Stack>
    </main>
  );
}
