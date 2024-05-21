"use client";
import fetchData from "@/lib/fetchChat";
import { useEffect, useState } from "react";

const MyComponent = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        await fetchData((newResponse: any) => {
          setResponses((prevResponses: any) => [...prevResponses, newResponse]);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div className=" mt-20 container">
      <h1>My Next.js App</h1>
      <div>
        {responses.map((response, index) => (
          <p key={index}>{response.response}</p>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
