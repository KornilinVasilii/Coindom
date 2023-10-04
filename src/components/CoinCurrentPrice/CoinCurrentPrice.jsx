import "./CoinCurrentPrice.sass";


export function CoinCurrentPrice({ coins}) {

  return (

    <div className="coin-current-wrapper">
      {coins.slice(0,4).map((coin) => {
        return (
          <div key={coin.uuid} className="coin-current-wrapper_block">
            <img
              className="coin-current-wrapper_img"
              src={coin.iconUrl}
              alt=""
            
            />
            <div className="coin-current-wrapper_price">
              <p>{coin.name}</p>
              {coin.change > 0 ? (
                <p className="coin-current-wrapper_name green">{coin.change}</p>
              ) : (
                <p className="coin-current-wrapper_name red">{coin.change}</p>
              )}
            </div>
            <p>$ {(+coin.price).toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
}