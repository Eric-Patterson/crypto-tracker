import Button from "../UI/Button";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function CryptoInfo(props) {
  const [crypto, setCrypto] = useState();
  const [count, setCount] = useState(1);

  function countHandler() {
    setCount((prevCount) => prevCount + 1);
  }

  function countDecrementHandler() {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    console.log(count);
    axios.get(`/api/${count}`).then((res) => {
      console.log(res.data);
      setCrypto(res.data);
    });
  }, [count]);

  useEffect(() => {
    console.log(count);
    axios.get(`/api/${count}`).then((res) => {
      console.log(res.data);
      setCrypto(res.data);
    });
  }, [count]);

  return (
    <div>
      {count >= 2 && (
        <Button onClick={countDecrementHandler}>Previous Page</Button>
      )}
      <Button onClick={countHandler}>Next Page {count}</Button>
      {crypto &&
        crypto.map((coin) => (
          <div key={coin.id}>
            <h1>{coin.id}</h1>
            <img src={coin.image.thumb} alt="testing"></img>
          </div>
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
