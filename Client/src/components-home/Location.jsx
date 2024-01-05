export default function Location({ location = null }) {
  return (
    <div className="location-container">
      {location === null ? (
        <>
          <h2 className="location-exact"></h2>
          <h3 className="location-reigon"></h3>
        </>
      ) : (
        <>
          <h2 className="location-exact">{location.name}</h2>
          <h3 className="location-reigon">
            {location.region != "" && <span>{location.region}, </span>}
            {location.country}
          </h3>
        </>
      )}
    </div>
  );
}
