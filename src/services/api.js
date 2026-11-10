import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}', 
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    units: 'metric', 
    lang: 'pt-br'
  }
})