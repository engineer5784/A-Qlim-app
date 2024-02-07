import React from 'react';
import { Box, Typography } from '@mui/material';
import RefreshButton from '../WeatherResetButton/WeatherResetButton';

export default function WeatherDisplay({ weather, onRefresh}) {
    return (
        <Box
            sx={{
                mt: 2,
                display: 'grid',
                gap: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant='h4' component='h2'>
                {weather.city}, {weather.country}
            </Typography>
            <Box
                component='img'
                alt={weather.conditionText}
                src={weather.icon}
                sx={{ margin: 'auto' }}
            />
            <Typography variant='h5' component='h3'>
                {weather.temp} °C
            </Typography>
            <Typography variant='h6' component='h4'>
                {weather.conditionText}
            </Typography>

            <RefreshButton onClick={onRefresh} />
            
        </Box>
    );
}
