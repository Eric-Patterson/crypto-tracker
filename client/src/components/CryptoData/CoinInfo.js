function CoinInfo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt="testing"></img>
      <p>Price USD {props.price}</p>
      <p>24Hr High{props.highs}</p>
      <p>24Hr Low{props.low}</p>
      <p>24Hr Change %{props.change}</p>
      <p>24Hr Change ${props.change24h}</p>
    </div>
  );
}

export default CoinInfo;
