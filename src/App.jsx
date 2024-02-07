import React, { useState } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import WeatherSearchForm from './components/WeatherSearchForm/WeatherSearchForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import './App.css'

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`;

export default function App() {
  // ... Estado y funciones aquí ...
  const [loading, setLoading] = useState(false);
  // const [city, setCity] = useState("");   
  const [error, setError] = useState({
    error: false,
    message: ''
  });

  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temp: '',
    condition: '',
    icon: '',
    conditionText: ''
  });


  const onSubmit = async (e, city) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error: false,
      message: '' // Reiniciar el mensaje de error
    });

    try {
      if (!city.trim()) {
        throw new Error('The city field is required!');
      }

      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();
      console.log("SOY data: ", data)

      if (data.error) {
        alert(data.error.message);
      }

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      });
    } catch (error) {
      setError({
        error: true,
        message: '',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setLoading(true);
      window.location.reload();
    } catch (error) {
      // Manejo de errores, si es necesario.
      setError({
        error: true,
        message: '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth='xs'
      sx={
        {
          mt: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '10px'
        }
      }
    >
      <Typography
        variant='h2'
        component='h1'
        align='center'
        gutterBottom
        className='title'
        color='white'
        fontFamily={'Playfair'}
        fontWeight='bold'
      >
        AQlim App
      </Typography>

      <WeatherSearchForm
        onSubmit={onSubmit}
        loading={loading}
        error={error.error}
        errorMessage={error.message}
      />

      {weather.city && <WeatherDisplay weather={weather} onRefresh={handleRefresh} />}

      <Typography
        textAlign='center'
        fontFamily={'Playfair'}
        color='primary'
        sx={
          {
            mt: 2,
            fontSize: '15px'
          }
        }
      >
        Powered by:{' '}
        <a href='https://www.weatherapi.com' title='Weather API' style={{ textDecoration: 'none', color: 'black' }} >
          WeatherAPI.com
        </a>

        <Box>
          <IconButton aria-label='GitHub' color='primary' href='https://github.com/engineer5784' target='_blank'>
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label='LinkedIn' color='primary' href='https://www.linkedin.com/in/ricardo-ricoz/' target='_blank'>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label='Twitter' color='primary' href='https://twitter.com/Ricardo89003492' target='_blank'>
            <TwitterIcon />
          </IconButton>
        </Box>

      </Typography>
      <br />

    </Container>
  );
}
