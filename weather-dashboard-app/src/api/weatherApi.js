// src/api/weatherApi.js
import axios from 'axios';

const API_KEY = '958283c50ea8aae0e2a1a504cc8fa0dd'; // Replace with your OpenWeatherMap API key
const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(CURRENT_WEATHER_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      weatherDescription: response.data.weather[0].description,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error); // Log error for debugging
    throw error;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    const forecastList = response.data.list.map((item) => ({
      date: new Date(item.dt * 1000).toLocaleDateString(),
      temperature: item.main.temp,
      weatherDescription: item.weather[0].description,
      precipitation: item.pop * 100,
    }));

    const dailyForecast = [];
    const dateSet = new Set();
    for (const item of forecastList) {
      if (!dateSet.has(item.date)) {
        dateSet.add(item.date);
        dailyForecast.push(item);
      }
    }

    return dailyForecast;
  } catch (error) {
    console.error('Error fetching forecast data:', error); // Log error for debugging
    throw error;
  }
};
