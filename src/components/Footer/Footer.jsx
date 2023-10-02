import './Footer.sass'
import { Container } from "../Container/Container";
import discord from '../../assets/icons8-discord.svg' 
import tg from "../../assets/icons8-telegram-logo.svg"; 
import youtube from "../../assets/youtube.svg"; 
import facebook from "../../assets/facebook.svg"; 
export function Footer() { 
  return (
    <Container>
      <footer className="footer">
        <div className="footer_socialIcon">
          <img src={discord} alt="" height="42" width="42" />
          <img src={tg} alt="" height="42" width="42" />
          <img src={youtube} alt="" height="42" width="42" />
          <img src={facebook} alt="" height="42" width="42" />
        </div>
      </footer>
    </Container>
  );
}