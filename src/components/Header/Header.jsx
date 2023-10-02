import './Header.sass'
import { Navigation } from '../Navigation/Navigation'
import tg from '../../assets/icons8-telegram-logo.svg'
import discord from "../../assets/icons8-discord.svg";
import { Container } from '../Container/Container';


export function Header() { 
  return (
    <Container>
     <header className="header">
      <p className="header_logo">COINDOM</p>
      <Navigation />
      <div className="header_social_icon">
        <img src={tg} alt="telegram" width="25" height="25" />
        <img src={discord} alt="discord" width="25" height="25" />
        </div>

      </header>
    </Container>
  )
}