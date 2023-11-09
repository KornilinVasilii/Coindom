import "./Header.sass";
import { useState } from "react";
import tg from "../../assets/icons8-telegram-logo.svg";
import discord from "../../assets/icons8-discord.svg";
import { Container } from "../Container/Container";

import MenuBtn from "../MenuBtn/MenuBtn";

export function Header() {
  const [isOpen, setIsOpen] = useState();
  return (
    <Container>
      <header className="header">
        <p className="header_logo">COINDOM</p>
        {/* <Navigation /> */}
        <nav
          className={`header-nav ${isOpen ? "active" : ""}`}
          isActive={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ul className="header-nav_list" onClick={() => setIsOpen(!isOpen)}>
            <a className="header-nav_link" href="">
              Home
            </a>
            <a className="header-nav_link" href="#market">
              Market
            </a>
            <a className="header-nav_link" href="#chooseSection">
              Choose Us
            </a>
            <a className="header-nav_link" href="#joinUs">
              Join
            </a>
          </ul>
        </nav>
        <MenuBtn isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <div className="header_social_icon">
          <img src={tg} alt="telegram" width="25" height="25" />
          <img src={discord} alt="discord" width="25" height="25" />
        </div>
      </header>
    </Container>
  );
}
