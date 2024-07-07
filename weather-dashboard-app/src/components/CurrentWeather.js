// src/components/CurrentWeather.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeather = ({ temperature, humidity, windSpeed, weatherDescription }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Current Weather</Typography>
        <Typography>Temperature: {temperature}°C</Typography>
        <Typography>Humidity: {humidity}%</Typography>
        <Typography>Wind Speed: {windSpeed} m/s</Typography>
        <Typography>Conditions: {weatherDescription}</Typography>
      </CardContent>
    </Card>
  );
};

CurrentWeather.defaultProps = {
  temperature: 'N/A',
  humidity: 'N/A',
  windSpeed: 'N/A',
  weatherDescription: 'N/A',
};

export default CurrentWeather;
