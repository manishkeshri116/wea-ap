// src/App.js
import React, { useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import TemperatureChart from './components/TemperatureChart';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchWeatherData, fetchForecastData } from './api/weatherApi';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weather = await fetchWeatherData(city);
      const forecast = await fetchForecastData(city);
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Weather Dashboard
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {loading && <CircularProgress />}
      {error && <ErrorBoundary>{error}</ErrorBoundary>}
      {weatherData && <CurrentWeather {...weatherData} />}
      {forecastData.length > 0 && <WeatherForecast forecastData={forecastData} />}
      {forecastData.length > 0 && <TemperatureChart chartData={forecastData} />}
    </Container>
  );
};

export default App;
