import sunLogo from "../assets/weather-icons/day/113.png";
import rainDrop from "../assets/weather-icons/rain.png";
import windImage from "../assets/weather-icons/wind.png";
import sunrise from "../assets/weather-icons/sunrise.png";
import sunset from "../assets/weather-icons/sunset.png";

export default function Current({ current = null, today = null }) {
  return (
    <div className="current-container">
      <h2 className="current-label">Current</h2>
      <img
        className="current-conditions-image"
        src={current != null ? current.condition.icon : sunLogo}
        alt="current-conditions-image"
      />
      <p className="current-temp">{current != null && current.temp_c}°C</p>
      <p className="current-feels-like">
        Feels like {current != null && current.feelslike_c}°C
      </p>
      <br />
      <h2 className="today-label">Today</h2>
      <div className="today-conatiner">
        <div className="todays-info-left">
          <p className="today-high-low">
            High: {today != null && today.day.maxtemp_c}°C
          </p>
          <p className="today-high-low">
            Low: {today != null && today.day.mintemp_c}°C
          </p>

          <p className="today-rain-wind-info">
            <img
              className="raindrop-image"
              src={rainDrop}
              alt="raindrop image"
            />
            {today != null && today.day.totalprecip_mm}mm &emsp;&emsp;
            {today != null && today.day.daily_chance_of_rain}%
          </p>
          <p className="today-rain-wind-info">
            <img className="wind-image" src={windImage} alt="wind image" />
            {current != null && current.wind_kph}km/h &emsp;{" "}
            {current != null && current.gust_kph}km/h
          </p>
          <p className="sunrise-sunset">
            <img
              className="sunrise-sunset-image"
              src={sunrise}
              alt="sun rise"
            />{" "}
            &emsp; &emsp;
            <time className="sunrise-sunset-time">
              {today != null && today.astro.sunrise}
            </time>
          </p>
          <p className="sunrise-sunset">
            <img className="sunrise-sunset-image" src={sunset} alt="sun set" />{" "}
            &emsp; &emsp;
            <time className="sunrise-sunset-time">
              {today != null && today.astro.sunset}
            </time>
          </p>
        </div>
        <div className="todays-info-right">
          <br />
          <h4 className="todays-info-right-text">Sunshine Duration:</h4>
          <h4 className="todays-info-right-text">
            Pressure: {current != null && current.pressure_mb}mb
          </h4>
          <h4 className="todays-info-right-text">
            Humidity: {current != null && current.humidity}%
          </h4>
          <h4 className="todays-info-right-text">Dew Point</h4>
          <h4 className="todays-info-right-text">
            UV Index: {today != null && today.day.uv}
          </h4>
        </div>
      </div>
    </div>
  );
}
