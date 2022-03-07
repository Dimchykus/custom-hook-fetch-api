import { useState } from "react";

const Request = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const defaultHeaders = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const request = async () => {
    setLoading(true);
    await fetch(url, options ? options : defaultHeaders)
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
