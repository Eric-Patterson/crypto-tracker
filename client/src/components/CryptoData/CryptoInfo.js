import Button from "../UI/Button";
import CoinInfo from "./CoinInfo";
// import IncrementBar from "../UI/IncrementBar";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function CryptoInfo(props) {
  const [crypto, setCrypto] = useState();
  const [count, setCount] = useState(1);

  let array = [];
  function incrementation(count) {
    for (let i = count; i <= count + 6; i++) {
      array.push(i);
    }

    console.log(array);
  }

  incrementation(count);

  function countHandler() {
    setCount((prevCount) => prevCount + 1);
  }

  function countDecrementHandler() {
    setCount((prevCount) => prevCount - 1);
  }

  // page handler
  function specificPageHandler(i) {
    setCount(i);
    axios.get(`/api/${i}`).then((res) => {
      console.log(res.data);
      setCrypto(res.data);
    });
  }

  // useEffect api call for incrementing/decrementing the count
  const apiCall = useCallback(() => {
    axios.get(`/api/${count}`).then((res) => {
      setCrypto(res.data);
    });
  }, [count]);

  useEffect(() => {
    apiCall();
  }, [apiCall]);

  return (
    <div>
      <Button onClick={countDecrementHandler}>Previous Page</Button>
      {array[0] > 1 && (
        <Button
          onClick={() => {
            specificPageHandler(1);
          }}
        >
          1
        </Button>
      )}
      {array.map(
        (i) =>
          i > 0 && (
            <Button
              key={i}
              onClick={() => {
                specificPageHandler(i);
              }}
            >
              {i}
            </Button>
          )
      )}
      <Button onClick={countHandler}>Next Page {count}</Button>
      {crypto &&
        crypto.map((coin) => (
          <CoinInfo
            key={coin.id}
            image={coin.image.thumb}
            name={coin.id}
            price={coin.market_data.current_price.usd}
            highs={coin.market_data.high_24h.usd}
            low={coin.market_data.low_24h.usd}
            change={coin.market_data.price_change_percentage_24h}
            change24h={coin.market_data.price_change_24h}
          />
        ))}
    </div>
  );
}

export default CryptoInfo;

// old code
// const forwardApi = useCallback(async () => {
//   try {
//     const resp = await axios.get(`/api/${count}`);
//     setCrypto(resp.data);
//     console.log(count);
//   } catch (err) {
//     console.log(err);
//   }
// }, []);

// useEffect(() => {
//   forwardApi();

//   return () => {
//     console.log("cleanup");
//   };
// }, [forwardApi, setCount]);
// const backwardApi = useCallback(() => {
//   console.log(i);
//   axios
//     .get(`/api/${i}`)
//     .then((res) => {
//       console.log(res.data);
//       setCrypto(res.data);
//       i--;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

// useEffect(() => {
//   backwardApi();
//   return () => {
//     // cleaning up the listeners here
//   };
// }, [backwardApi]);
