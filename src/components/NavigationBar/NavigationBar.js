import "./NavigationBar.css"
const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <a href="#" className="logo">Diamond Shop</a>
      <div className="navigation-bar-link">
        <ul>
          <input className="search-bar" type="search" placeholder="Search"></input>
          <li><a className="link" href="#">Home</a></li>
          <li><a className="link" href="#">Comunity</a></li>
          <li><a className="link" href="#">Social Media</a></li>
          <li><a className="link" href="#">Partnership</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
