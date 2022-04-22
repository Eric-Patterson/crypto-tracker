import Button from "../UI/Button";
import CoinInfo from "./CoinInfo";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// import IncrementBar from "../UI/IncrementBar";

import { useState, useEffect, useCallback, Fragment } from "react";
import axios from "axios";

// MUI STUFF
function createData(
  name,
  image,
  priceUSD,
  high24hours,
  low24hour,
  change24hour
) {
  return {
    name,
    image,
    priceUSD,
    high24hours,
    low24hour,
    change24hour,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <img src={row.image}></img>
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.priceUSD}</TableCell>
        <TableCell align="left">{row.high24hours}</TableCell>
        <TableCell align="left">{row.low24hour}</TableCell>
        <TableCell align="left">{row.change24hour}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    priceUSD: PropTypes.number.isRequired,
    low24hour: PropTypes.number.isRequired,
    high24hours: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    change24hour: PropTypes.number.isRequired,
  }).isRequired,
};

function CryptoInfo(props) {
  const [crypto, setCrypto] = useState();
  const [count, setCount] = useState(1);

  let array = [];
  function incrementation(count) {
    for (let i = count - 2; i <= count + 2; i++) {
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

  // key={coin.id}
  // image={coin.image.thumb}
  // name={coin.id}
  // price={coin.market_data.current_price.usd}
  // highs={coin.market_data.high_24h.usd}
  // low={coin.market_data.low_24h.usd}
  // change={coin.market_data.price_change_percentage_24h}
  // change24h={coin.market_data.price_change_24h}

  let rows = [];
  if (crypto) {
    rows = crypto.map((crypto) => {
      return createData(
        crypto.id,
        crypto.image.thumb,
        crypto.market_data.current_price.usd,
        crypto.market_data.high_24h.usd,
        crypto.market_data.low_24h.usd,
        crypto.market_data.price_change_percentage_24h
        // crypto.market_data.price_change_24h
      );
    });
  }

  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  // createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  // createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  // createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),

  return (
    <div>
      {/* <CollapsibleTable /> */}
      <Button onClick={countDecrementHandler}>Previous Page</Button>
      {array[0] > 1 && (
        <Button
          onClick={() => {
            specificPageHandler(1);
          }}
        >
          ...
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

      <TableContainer
        component={Paper}
        style={{ width: "1000px", margin: "0 auto ", marginTop: "50px" }}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price USD</TableCell>
              <TableCell align="left">24 Hour High</TableCell>
              <TableCell align="left">24 Hour Low</TableCell>
              <TableCell align="left">24 Hour Change %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {crypto &&
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
        ))} */}
    </div>
  );
}

export default CryptoInfo;

// import Button from "../UI/Button";
// import CoinInfo from "./CoinInfo";
// // import IncrementBar from "../UI/IncrementBar";

// import { useState, useEffect, useCallback } from "react";
// import axios from "axios";

// function CryptoInfo(props) {
//   const [crypto, setCrypto] = useState();
//   const [count, setCount] = useState(1);

//   let array = [];
//   function incrementation(count) {
//     for (let i = count - 2; i <= count + 2; i++) {
//       array.push(i);
//     }

//     console.log(array);
//   }

//   incrementation(count);

//   function countHandler() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function countDecrementHandler() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   // page handler
//   function specificPageHandler(i) {
//     setCount(i);
//     axios.get(`/api/${i}`).then((res) => {
//       console.log(res.data);
//       setCrypto(res.data);
//     });
//   }

//   // useEffect api call for incrementing/decrementing the count
//   const apiCall = useCallback(() => {
//     axios.get(`/api/${count}`).then((res) => {
//       setCrypto(res.data);
//     });
//   }, [count]);

//   useEffect(() => {
//     apiCall();
//   }, [apiCall]);

//   return (
//     <div>
//       <Button onClick={countDecrementHandler}>Previous Page</Button>
//       {array[0] > 1 && (
//         <Button
//           onClick={() => {
//             specificPageHandler(1);
//           }}
//         >
//           ...
//         </Button>
//       )}
//       {array.map(
//         (i) =>
//           i > 0 && (
//             <Button
//               key={i}
//               onClick={() => {
//                 specificPageHandler(i);
//               }}
//             >
//               {i}
//             </Button>
//           )
//       )}
//       <Button onClick={countHandler}>Next Page {count}</Button>
//       {crypto &&
//         crypto.map((coin) => (
//           <CoinInfo
//             key={coin.id}
//             image={coin.image.thumb}
//             name={coin.id}
//             price={coin.market_data.current_price.usd}
//             highs={coin.market_data.high_24h.usd}
//             low={coin.market_data.low_24h.usd}
//             change={coin.market_data.price_change_percentage_24h}
//             change24h={coin.market_data.price_change_24h}
//           />
//         ))}
//     </div>
//   );
// }

// export default CryptoInfo;
