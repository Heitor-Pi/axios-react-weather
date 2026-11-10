import { useState, useEffect } from 'react';
import { api } from '../services/api';

const CITIES = [
  { query: 'Sao Paulo,BR', name: 'São Paulo' },
  { query: 'Rio de Janeiro,BR', name: 'Rio de Janeiro' },
  { query: 'Lisbon,PT', name: 'Lisboa' },
  { query: 'New York,US', name: 'Nova York' },
  { query: 'Tokyo,JP', name: 'Tóquio' },
  { query: 'London,GB', name: 'Londres' },
  { query: 'Paris,FR', name: 'Paris' },
  { query: 'Rome,IT', name: 'Roma' },
  { query: 'Berlin,DE', name: 'Berlim' },
  { query: 'Buenos Aires,AR', name: 'Buenos Aires' },
  { query: 'Sydney,AU', name: 'Sydney' },
  { query: 'Cairo,EG', name: 'Cairo' },
];

export function useUserWeather() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);

    useEffect(() => {
        async function fetchWeatherData() {
            try {
                setLoading(true);
                const requests = CITIES.map(city => api.get('/weather', { params: { q: city.query } }));
                const responses = await Promise.all(requests);
                const data = responses.map((res, index) => ({...res.data, cityName: CITIES[index].name }));
                setWeatherData(data);
            } catch (err) {
                setError('Erro ao carregar dados meterológicos.');
            } finally {
                setLoading(false);
            }
        }
        fetchWeatherData();

        return { weatherData, loading, error };
    }, []);
}