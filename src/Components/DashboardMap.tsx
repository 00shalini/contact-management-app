import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


interface MapData {
  map(arg0: (country: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
  // Map data structure
}


interface DashboardMapProps {
  data: MapData;
}

function DashboardMap({ data }: DashboardMapProps) {
  console.log(data);
  return   (  
  <div>
  {data ? (
     <MapContainer style={{ height: '400px', width: '100%' }} center={[0, 0]} zoom={2}>
     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
     {data.map((country) => (
       <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>
         <Popup>
           <div>
             <h2>{country.country}</h2>
             <p>Total Active Cases: {country.active}</p>
             <p>Total Recovered Cases: {country.recovered}</p>
             <p>Total Deaths: {country.deaths}</p>
           </div>
         </Popup>
       </Marker>
     ))}
   </MapContainer>
  ) : (
    <p>Loading map data...</p>
  )}
</div>)
;
}

export default DashboardMap;
