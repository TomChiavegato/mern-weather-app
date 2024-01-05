import Map from "../components-map/Map.jsx";
import Info from "../components-map/Info.jsx";

export default function MapPage() {
  return (
    <main className="main">
      <div className="map-page">
        <Map />
        <Info />
      </div>
    </main>
  );
}
