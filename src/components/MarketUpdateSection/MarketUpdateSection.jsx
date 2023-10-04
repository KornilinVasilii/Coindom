import "./MarketUpdateSection.sass";
import { Container } from '../Container/Container'
import { Pagination } from "../Pagination/Pagination";

export function MarketUpdateSection({
  coins,
  coinsPerPage,
  currentCoins,
  paginate,
  currentPage
}) {
  return (
    <Container>
      <section id="market" className="update-section">
        <h2 className="update-section_title">Market Update</h2>
        <div className="update-section_header">
          <p>Coin</p>
          <p className="update-section_price">Price</p>
          <p>24h Change</p>
          <p className="update-section_cap">Market Cap</p>
        </div>
        <div className="wrapper-coin-list">
          {currentCoins.map((coin) => {
            return (
              <div key={coin.uuid} className="coin-list">
                <div className="coin-list_name">
                  <img className="coin-list_img" src={coin.iconUrl} alt="" />
                  <p className="coin-list_coin-name">
                    {coin.name.trim().length > 10
                      ? coin.name.slice(0, 15) + "..."
                      : coin.name}
                  </p>
                </div>
                <div className="coin-list_cost">
                  <p>{(+coin.price).toFixed(2)} $</p>
                </div>
                {coin.change > 0 ? (
                  <p className="coin-list_change up">{coin.change} %</p>
                ) : (
                  <p className="down">{coin.change} %</p>
                )}

                <p className="update-section_cap">
                  ${" "}
                  {(+coin.marketCap)
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                </p>
              </div>
            );
          })}
        </div>
        <Pagination
          coinsPerPage={coinsPerPage}
          totalCoins={coins.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </section>
    </Container>
  );
}