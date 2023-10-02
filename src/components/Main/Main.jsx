import './main.sass'
import { Container } from "../Container/Container"
import bitcoin from "../../assets/icons8-bitcoin.svg";
import eth from "../../assets/eth.svg";
import { CoinCurrentPrice } from '../CoinCurrentPrice/CoinCurrentPrice';
import { MarketUpdateSection } from '../MarketUpdateSection/MarketUpdateSection';
import { ChooseSection } from '../ChooseSection/ChooseSection';
import { JoinUas } from '../JoinUs/JoinUs';

export function Main({ coins, coinsPerPage, currentCoins, paginate, currentPage }) {
  return (
    <Container>
      <main className="main">
        <div className="main_title">
          <div className="main_coin_animate">
            <img src={bitcoin} alt="bitcoin" height="78" />
          </div>
          <div className="main_eth_animate">
            <img src={eth} alt="etherium" />
          </div>
          <h1>track and trade </h1>
          <span>crypto currensies</span>
        </div>
      </main>
      <div>
        {coins.length > 0 ? (
          <CoinCurrentPrice coins={coins} />
        ) : (
          <div className="loading">loading...</div>
        )}
      </div>
      {coins.length > 0 ? (
        <MarketUpdateSection
          currentPage={currentPage}
          coins={coins}
          coinsPerPage={coinsPerPage}
          totalCoins={coins.length}
          currentCoins={currentCoins}
          paginate={paginate}
        />
      ) : (
        <div className="loading">loading...</div>
      )}
      <ChooseSection />
      <JoinUas />
    </Container>
  );
}