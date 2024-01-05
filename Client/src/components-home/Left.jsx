import Location from "./Location.jsx";
import Current from "./Current.jsx";

export default function Left({
  current = null,
  today = null,
  location = null,
}) {
  return (
    <div className="left-half">
      <Location location={location} />
      <Current current={current} today={today} />
    </div>
  );
}
