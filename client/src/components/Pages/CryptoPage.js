import CryptoInfo from "../CryptoData/CryptoInfo";

// import { useState, useEffect } from "react";
// import axios from "axios";

function CryptoPage() {
  //   const [crypto, setCrypto] = useState();

  //   useEffect(() => {
  //     axios.get(`/api/${i}`).then((res) => {
  //       console.log(res.data);
  //       setCrypto(res.data);
  //     });
  //   }, []);

  return <CryptoInfo />;
  //   return <CryptoInfo data={crypto} counter={i}/>;
}

export default CryptoPage;
