import rainDrop from "../assets/weather-icons/rain.png";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function WeatherDay({ day = null }) {
  if (day == null) {
    return <div className="slim-box"></div>;
  }
  let date = new Date(0);
  date.setUTCSeconds(day.date_epoch + 86400);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  return (
    <div className="slim-box">
      <div className="weather-day">
        <div className="day-date">
          <p className="day-of-week">{dayOfWeek}</p>
          <p className="day-of-month">
            {month} {dayOfMonth}
          </p>
        </div>
        <img className="day-icon" src={day.day.condition.icon} />
        <h2 className="day-temperature">{day.day.avgtemp_c}°C</h2>
        <p className="day-precip-info">
          <img className="raindrop-image" src={rainDrop} alt="raindrop image" />
          <span className="day-precip-amount">{day.day.totalprecip_mm}mm</span>
          <span className="day-precip-chance">
            {day.day.daily_chance_of_rain}%
          </span>
        </p>
        <p className="wind-average">{day.day.maxwind_kph}km/h</p>
      </div>
    </div>
  );
}
