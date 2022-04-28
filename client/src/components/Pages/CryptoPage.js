import { useState, useEffect } from "react";
import CryptoInfo from "../CryptoData/CryptoInfo";
import axios from "axios";
import AppPagination from "../UI/AppPagination";

function CryptoPage() {
  const [crypto, setCrypto] = useState();
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(274);

  //FETCH MOVIES
  const fetchCrypto = async () => {
    try {
      const { data } = await axios.get(`/api/${page}`);
      setCrypto(data);
      setNumberOfPages(numberOfPages);
      // setNumberOfPages(data.length);
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

export default CryptoPage;
