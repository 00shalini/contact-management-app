import { useQuery } from 'react-query';

export const fetchContacts = async () => {
  const response = await fetch('https://api.example.com/contacts');
  if (!response.ok) {
    throw new Error('Error fetching contacts');
  }
  return response.json();
};

export const useContacts = () => {
  return useQuery('contacts', fetchContacts);
};

export const fetchChartData = async () => {
    const response = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    if (!response.ok) {
      throw new Error('Error fetching chart data');
    }
    return response.json();
  };
  
  export const fetchMapData = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) {
      throw new Error('Error fetching map data');
    }
    return response.json();
  };
  