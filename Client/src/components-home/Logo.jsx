import sunLogo from "../assets/weather-icons/day/113.png";

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo-image" src={sunLogo} alt="logo-image" href="/" />
      <a className="logo-text" href="/">
        WEATHER APP
      </a>
    </div>
  );
}
