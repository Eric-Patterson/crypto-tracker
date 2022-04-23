import CryptoInfo from "../CryptoData/CryptoInfo";

import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import AppPagination from "../UI/AppPagination";

function CryptoPage() {
  //   const [crypto, setCrypto] = useState();

  //   useEffect(() => {
  //     axios.get(`/api/${i}`).then((res) => {
  //       console.log(res.data);
  //       setCrypto(res.data);
  //     });
  //   }, []);

  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(9);
  const [numberOfPages, setNumberOfPages] = useState(10);

  //FETCH MOVIES
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`/api/${page}`);
      setMovies(data?.results);
      setNumberOfPages(data.length);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {/* <AppPagination setPage={setPage} pageNumber={numberOfPages} /> */}
      <CryptoInfo />
    </div>
  );
  //   return <CryptoInfo data={crypto} counter={i}/>;
}

export default CryptoPage;
