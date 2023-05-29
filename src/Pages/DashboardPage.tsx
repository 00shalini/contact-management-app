import React from 'react';
import { useQuery } from 'react-query';
import { fetchChartData, fetchMapData } from '../api';
import DashboardCharts from '../Components/DashboardCharts';
import DashboardMap from '../Components/DashboardMap';
import Navbar from '../Components/Navbar';

function DashboardPage() {
  const { data: chartData, isLoading: isChartLoading } = useQuery('chartData', fetchChartData);
  const { data: mapData, isLoading: isMapLoading } = useQuery('mapData', fetchMapData);

  if (isChartLoading || isMapLoading) {
    return (
      <div>
      <h1 className="text-center w-screen h-20 pt-5 text-white font-bold text-4xl font-mono bg-teal-950">Loading ...</h1>      
    </div>
    )
    
  }
  
  return (
    <div>
      <h1 className="text-center w-screen h-20 pt-5 text-white font-bold text-4xl font-mono bg-teal-950">Dashboard</h1>
      <div className='flex'>
        <Navbar />
        
        <div>
          
          <DashboardCharts data={chartData}/>
          <DashboardMap data={mapData} />
        </div>     
      </div>
      
    </div>
  );
}

export default DashboardPage;
