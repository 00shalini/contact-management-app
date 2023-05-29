import L from 'leaflet';
import React, { useEffect, useRef ,useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
}

interface DashboardMapProps {
  data: CountryData[];
}

function DashboardMap({ data }: DashboardMapProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [storedData, setStoredData] = useState<CountryData[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      
      setIsLoading(false);
      localStorage.setItem('data', JSON.stringify(data)); 
    }
  }, [data]);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current && data?.length> 0) {
      const bounds = L.latLngBounds(data?.map(country => [country?.countryInfo?.lat, country?.countryInfo?.long]));
    mapRef.current.fitBounds(bounds);
    }
  }, [data]);

  useEffect(() => {
    const storeddata = localStorage.getItem('data');
    
    if (storeddata) {
      setTimeout(() => {
      setStoredData(JSON.parse(storeddata));
 // Retrieve data from localStorage
    }, 3000);
    
    }
  }, []);

  return (
    <div>
    {isLoading ? (
      <p>Loading map data...</p>
    ) : (
      
      <MapContainer ref={mapRef} style={{ height: '400px', width: '100%',marginLeft:'150px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {storedData?.map((country) => {
         
          return (
            <Marker
            key={country?.country}
            position={[country?.countryInfo?.lat, country?.countryInfo?.long]}
          >
            <Popup>
              <div>
                <h2>{country?.country}</h2>
                <p>Total Active Cases: {country?.active}</p>
                <p>Total Recovered Cases: {country?.recovered}</p>
                <p>Total Deaths: {country?.deaths}</p>
              </div>
            </Popup>
          </Marker>
          )
         
})}
      </MapContainer>
    )}
  </div>
  );
}

export default DashboardMap;
