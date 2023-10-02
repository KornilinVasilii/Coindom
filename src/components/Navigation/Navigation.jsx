import './Navigation.sass'

export function Navigation() { 
  return (
    <nav className="nav">
      <ul className="nav_item">
        <a className="nav_item_link" href="">
          Home
        </a>
        <a className="nav_item_link" href="#market">
          Market
        </a>
        <a className="nav_item_link" href="#chooseSection">
          Choose Us
        </a>
        <a className="nav_item_link" href="#joinUs">
          Join
        </a>
      </ul>
    </nav>
  );
}