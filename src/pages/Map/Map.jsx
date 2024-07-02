import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
    return (
  
         <MapContainer className="h-96 z-0" center={[23.79394993389781, 90.4049625821915]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[23.79394993389781, 90.4049625821915]}>
    <Popup>
      Real State Head Office
    </Popup>
  </Marker>
</MapContainer>

    );
};

export default Map;