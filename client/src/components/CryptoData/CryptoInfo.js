import Button from "../UI/Button";
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

  useEffect(() => {
    console.log(count);
    axios.get(`/api/${count}`).then((res) => {
      setCrypto(res.data);
    });
  }, [count]);

  useEffect(() => {
    console.log(count);
    axios.get(`/api/${count}`).then((res) => {
      setCrypto(res.data);
    });
  }, [count]);

  return (
    <div>
      <Button onClick={countDecrementHandler}>Previous Page</Button>

      {array.map((i) => i > 0 && <Button onClick={countHandler}>{i}</Button>)}
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
