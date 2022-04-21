function CryptoInfo(props) {
  return (
    <div>
      {props.data &&
        props.data.map((coin) => (
          <div>
            <h1>{coin.id}</h1>
            <img src={coin.image.thumb} alt="testing"></img>
          </div>
        ))}
    </div>
  );
}

export default CryptoInfo;
