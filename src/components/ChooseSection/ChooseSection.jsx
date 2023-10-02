import './ChooseSection.sass'
import { Container } from "../Container/Container";
import wallet from '../../assets/wallet.png'
import bit from '../../assets/bit.svg';
import pen from "../../assets/pen.png";
import light from "../../assets/lightning.png";
import tower from "../../assets/tower.png";
import knight from "../../assets/knight.png";
import cubes from '../../assets/cubes.png'

export function ChooseSection() { 
  return (
    <Container>
      <section className="chooseSection" id="chooseSection">
        <h3 className="chooseSection_title">
          Why <span>Choose Us</span>
        </h3>
        <div className="chooseSection_block">
          <div className="chooseSection-block_left">
            <div className="chooseSection_wrapper">
              <div className="chooseSection_img">
                <img src={wallet} alt="" width="40px" height="38" />
              </div>
              <div>
                <p style={{ fontSize: "20px", textTransform: "uppercase" }}>
                  connect your wallet
                </p>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    opacity: "0.7",
                  }}
                >
                  Use Trust Wallet, Metamask or to connect to the app.
                </p>
              </div>
            </div>
            <div className="chooseSection_wrapper">
              <div className="chooseSection_img">
                <img src={pen} alt="" width="40px" height="40" />
              </div>
              <div>
                <p style={{ fontSize: "20px", textTransform: "uppercase" }}>
                  select your quantity
                </p>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    opacity: "0.7",
                  }}
                >
                  Upload your crypto and set a title, description and price.
                </p>
              </div>
            </div>
            <div className="chooseSection_wrapper">
              <div className="chooseSection_img">
                <img src={light} alt="" width="40px" height="40" />
              </div>
              <div>
                <p style={{ fontSize: "20px", textTransform: "uppercase" }}>
                  confirm
                </p>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    opacity: "0.7",
                  }}
                >
                  Earn by selling your crypto on our marketplace.
                </p>
              </div>
            </div>
          </div>
          <div className="chooseSection-block_middle">
            {/* <img src={bit} alt="" height="120" /> */}
          </div>
          <div className="chooseSection-block_right">
            <div className="chooseSection_wrapper">
              <div className="chooseSection_img">
                <img src={tower} alt="" width="40px" height="40" />
              </div>
              <div>
                <p style={{ fontSize: "20px", textTransform: "uppercase" }}>
                  receive your own nfts
                </p>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    opacity: "0.7",
                  }}
                >
                  Invest all your crypto at one place on one platform.
                </p>
              </div>
            </div>
            <div className="chooseSection_wrapper">
              <div className="chooseSection_img">
                <img src={knight} alt="" width="40px" height="45" />
              </div>
              <div>
                <p style={{ fontSize: "20px", textTransform: "uppercase" }}>
                  take a market to sell
                </p>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    opacity: "0.7",
                  }}
                >
                  Discover, collect the right crypto collections to bay or sell.
                </p>
              </div>
            </div>
            <div className="chooseSection_wrapper">
              <div className="chooseSection_img">
                <img src={cubes} alt="" width="40px" height="40" />
              </div>
              <div>
                <p style={{ fontSize: "20px", textTransform: "uppercase" }}>
                 drive your collection
                </p>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    opacity: "0.7",
                  }}
                >
                  We make it easy to Discover, Invest and manage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}