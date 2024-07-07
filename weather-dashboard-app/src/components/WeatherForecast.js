// src/components/WeatherForecast.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherForecast = ({ forecastData = [] }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">7-Day Forecast</Typography>
        {forecastData.map((forecast, index) => (
          <Typography key={index}>
            {forecast.date}: {forecast.temperature}°C, {forecast.weatherDescription}, {forecast.precipitation}% chance of rain
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;
