import './main.sass'
import { TailSpin } from "react-loader-spinner";
import "react-loading-skeleton/dist/skeleton.css";
import { Container } from "../Container/Container"
import bitcoin from "../../assets/icons8-bitcoin.svg";
import eth from "../../assets/eth.svg";
import { CoinCurrentPrice } from '../CoinCurrentPrice/CoinCurrentPrice';
import { MarketUpdateSection } from '../MarketUpdateSection/MarketUpdateSection';
import { ChooseSection } from '../ChooseSection/ChooseSection';
import { JoinUas } from '../JoinUs/JoinUs';

export function Main({ coins, coinsPerPage, currentCoins, paginate, currentPage,}) {
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
          <span className="main_subtitle">crypto currensies</span>
        </div>
      </main>
      <div>
        {coins.length > 0 ? (
          <CoinCurrentPrice coins={coins} />
        ) : (
          <div className="loading">
            <TailSpin
              height="80"
              width="80"
              color="#d142cc"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
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
          <div className="loading">
            <TailSpin
              height="80"
              width="80"
              color="#d142cc"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
      )}
      <ChooseSection />
      <JoinUas />
    </Container>
  );
}