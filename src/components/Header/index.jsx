import "./styles.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <h1>Estate Agent Client-side Web Application</h1>
    </header>
  );
};

export default Header;
