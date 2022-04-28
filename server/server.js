const express = require("express");
const axios = require("axios");
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();
// crypto api
// https://www.coingecko.com/en/api/documentation?
// https://github.com/miscavage/CoinGecko-API

const app = express();
const port = 5000;

app.get("/api", async (req, res) => {
  // https://api.coingecko.com/api/v3/coins
  // get api and res.send response
  let response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/?page=1"
  );
  res.send(response.data);
});

app.get("/api/:id", async (req, res) => {
  // https://api.coingecko.com/api/v3/coins/bitcoin
  // get api and res.send response
  let response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/?page=${req.params.id}`
  );
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
