import RightLabels from "./RightLabels";
import WeatherDay from "./WeatherDay";

export default function Right({ forecast = null }) {
  return (
    <div className="right-half">
      <RightLabels />
      {getComponents(forecast)}
    </div>
  );
}

function getComponents(forecast = null) {
  const weatherDays = [];
  if (forecast == null) {
    for (let i = 0; i < 7; i++) {
      weatherDays.push(<WeatherDay key={i} />);
    }
  } else {
    for (let i = 0; i < 7; i++) {
      weatherDays.push(
        <WeatherDay day={forecast.forecastday[i + 1]} key={i} />
      );
    }
  }
  return weatherDays;
}
