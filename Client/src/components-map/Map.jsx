import React, {
  useMemo,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import markerIcon from "../assets/map-marker.png";

export default function MapFullComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "##################",
  });

  if (!isLoaded) {
    return (
      <div className="message-container">
        <h1 className="message">Loading...</h1>
      </div>
    );
  }
  return <Map />;
}

function Map() {
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: Number(20), lng: Number(10) }), []);
  const [pinPosition, setPinPosition] = useState({ lat: 20, lng: 10 });
  const options = useMemo(
    () => ({
      mapId: "4f1c96f68a01500f",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const markerRef = useRef();

  const printPosition = () => {
    const pos = markerRef.current;
    console.log(`Lat: ${pos.lat()}, lng: ${pos.lng()}`);
  };

  const latitude = Number(localStorage.getItem("lat"));
  const longitude = Number(localStorage.getItem("lng"));

  console.log(`lat: ${latitude}, lng: ${longitude}`);
  console.log("pin pos (before): " + JSON.stringify(pinPosition));

  //setPinPosition({ lat: 0, lng: 0 });

  console.log("pin pos (after): " + JSON.stringify(pinPosition));

  var marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    draggable: true,
    icon: markerIcon,
  });
  /*
  <Marker
        position={pinPosition}
        draggable={true}
        icon={markerIcon}
        onDblClick={printPosition}
        ref={markerRef}
      />*/

  return (
    <GoogleMap
      zoom={2}
      center={center}
      mapContainerClassName="map-container"
      options={options}
      onLoad={onLoad}
    >
      <Marker
        position={pinPosition}
        draggable={true}
        icon={markerIcon}
        onDblClick={printPosition}
        ref={markerRef}
      />
    </GoogleMap>
  );
}
