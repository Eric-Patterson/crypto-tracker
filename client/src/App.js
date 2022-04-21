import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios.get("/api").then((res) => {
      console.log(res.data);
      setCrypto(res.data);
    });
  }, []);

  // test
  // here is some more code
  return (
    <div>
      {/* display */}
      {/* loop over data.data[i].id */}
      {crypto &&
        crypto.map((coin) => (
          <div>
            <h1>{coin.id}</h1>
            <img src={coin.image.thumb}></img>
          </div>
        ))}
    </div>
  );
}

export default App;
