import "./map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Form from "./Form";
import { Icon } from "leaflet";
import yellowMarker from "../../assets/yellow-marker.png";
import redMarker from "../../assets/red-marker.png";
import greenMarker from "../../assets/green-marker.png";
import CheckIcon from "./Icons/CheckIcon";
import EditIcon from "./Icons/EditIcon";
import TrachIcon from "./Icons/TrachIcon";

const Map = () => {
  // markers coordinates
  const markers = [
    {
      geocode: [24.4542, 54.378], // Top left
    },
    {
      geocode: [24.4542, 54.376], // Bottom left
    },
    {
      geocode: [24.4535, 54.376], // Bottom right
    },
    {
      geocode: [24.4535, 54.3775], // Mid right
    },
    {
      geocode: [24.4535, 54.378], // Top right
    },
    {
      geocode: [24.454, 54.378], // Mid top
    },
  ];

  // customize markers
  const yellowMarkers = new Icon({
    iconUrl: yellowMarker,
    iconSize: [40, 40], // size of the icon
  });

  const redMarkers = new Icon({
    iconUrl: redMarker,
    iconSize: [40, 40], // size of the icon
  });
  const greenMarkers = new Icon({
    iconUrl: greenMarker,
    iconSize: [40, 40], // size of the icon
  });

  // Extract geocode positions for polyline
  const positions = markers.map((marker) => marker.geocode);

  // Define the coordinates of the rectangle
  const rectangleCoords = [
    [24.4542, 54.378],
    [24.4542, 54.376],
    [24.4535, 54.376],
    [24.4535, 54.3775],
    [24.4535, 54.378],
    [24.454, 54.378],
  ];

  return (
    <div className="container">
      <h3>Trip Route</h3>
      <div className="map-container">
        {/* form component */}
        <Form />

        <MapContainer
          center={[24.4539, 54.3773]}
          zoom={100}
          zoomControl={false}
          className="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker, index) => (
            <Marker
              position={marker.geocode}
              icon={
                index === 2
                  ? greenMarkers
                  : index === 3
                  ? redMarkers
                  : yellowMarkers
              }
            >
              <Popup className="popup-container">
                <CheckIcon /> <i class="ph ph-line-vertical"></i> <EditIcon />{" "}
                <i class="ph ph-line-vertical"></i> <TrachIcon />
              </Popup>
            </Marker>
          ))}
          {/* drow line to link all points */}
          <Polyline positions={positions} color="blue" />
          <Polygon positions={rectangleCoords} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
