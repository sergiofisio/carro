import "./style.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-around">
      <img src={logo} alt="LOGO CARRO" />
      <h2 className="title">carro seguidor de linha</h2>
    </header>
  );
}
