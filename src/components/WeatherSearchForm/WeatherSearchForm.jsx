import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export default function WeatherSearchForm({ onSubmit, loading, error}) {
    const [city, setCity] = useState("");   
    
   

    return (
        <Box
            sx={{ display: 'grid', gap: 2 }}
            component='form'
            autoComplete='off'
            onSubmit={(e) => onSubmit(e, city)}
        >
            <TextField
                id='city'
                label='City'
                variant='outlined'
                size='small'
                required
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                error={error}
                helperText={error ? 'The city field is required!' : ''}  
                InputLabelProps={{
                    sx: {
                        color: 'primary', // Cambia esto al color que desees
                    },
                }}             
            />

            {/* Mostrar el mensaje de error debajo del campo de entrada */}
            {error && (
                <Typography color='error' variant='caption'>
                    {error.message}
                </Typography>
            )}

            <LoadingButton
                type='submit'
                variant='contained'
                loading={loading}
                loadingIndicator='Loading...'
                fullWidth
            >
                Search
            </LoadingButton>
        </Box>
    );
}