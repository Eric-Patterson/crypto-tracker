import { useState, useEffect } from "react";
import CryptoInfo from "./CryptoInfo";
import axios from "axios";
import AppPagination from "../UI/AppPagination";

function CryptoMaster() {
  const [crypto, setCrypto] = useState();
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(274);

  //FETCH MOVIES
  const fetchCrypto = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/?page=${page}`
      );
      setCrypto(data);
      setNumberOfPages(numberOfPages);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCrypto();
  }, [page]);

  return (
    <div>
      <AppPagination setPage={setPage} pageNumber={numberOfPages} />
      <CryptoInfo cryptoData={crypto} />
    </div>
  );
}

export default CryptoMaster;
