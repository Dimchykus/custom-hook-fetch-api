import { useState } from "react";

const Request = (url, API_KEY) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*",
      Authorization: API_KEY ? "Bearer " + API_KEY : "",
    },
  };
  const request = async () => {
    setLoading(true);
    await fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export default Request;
