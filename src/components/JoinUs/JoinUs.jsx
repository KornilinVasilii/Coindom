import './JoinUs.sass'
import { Container } from "../Container/Container";
import bitcoin from "../../assets/icons8-bitcoin.svg";
import eth from "../../assets/eth.svg";

export function JoinUas() { 
  return (
    <Container>
      <section className="join-us" id="joinUs">
        <div className="join-us_coin_animate">
          <img src={bitcoin} alt="bitcoin" width='78'/>
        </div>
        <div className="join-us_eth_animate">
          <img src={eth} alt="etherium" />
        </div>
        <h3 className="join-us_title">join us via</h3>
        <span>discord</span>
        <p className="join-us_subtitle">
          Invest and manage all your crypto at one place.
        </p>
        <button className="join-us_button">Join via Discord</button>
      </section>
    </Container>
  );
}