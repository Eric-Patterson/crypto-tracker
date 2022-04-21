import Button from "../UI/Button";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function CryptoInfo(props) {
  const [crypto, setCrypto] = useState();

  let i = 0;
  const movingHandler = useCallback(() => {
    console.log(i);
    axios
      .get(`/api/${i}`)
      .then((res) => {
        console.log(res.data);
        setCrypto(res.data);
        i++;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    movingHandler();
  }, [movingHandler]);

  // useEffect(() => {
  //   buttonHandler();
  //   axios.get(`/api/${i}`).then((res) => {
  //     console.log(res.data);
  //     setCrypto(res.data);
  //   });
  // }, []);

  return (
    <div>
      <Button onClick={movingHandler}>Next Page</Button>
      {crypto &&
        crypto.map((coin) => (
          <div>
            <h1>{coin.id}</h1>
            <img src={coin.image.thumb} alt="testing"></img>
          </div>
        ))}
    </div>
  );
}

export default CryptoInfo;
