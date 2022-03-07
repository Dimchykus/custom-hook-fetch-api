### custom-hook-fetch-api

## Installation

```
npm i custom-hook-fetch-api
```
# OR
```
yarn add custom-hook-fetch-api
```

## Quick Start

# Basic Usage
```
import { useEffect } from "react";
import Request from "custom-hook-fetch-api";

const App = () => {
  const data = Request("https://api.coindesk.com/v1/bpi/currentprice.json", {method: "GET"});

  useEffect(() => {
    data.request();
  }, []);

  useEffect(() => {
    console.log(data.data);
  }, [data.data]);

  if (data.loading) return <div>Loading!!!</div>;
  if (data.error) return <div>Error!!!</div>;

  return <div className="App">Done</div>;
};
```
