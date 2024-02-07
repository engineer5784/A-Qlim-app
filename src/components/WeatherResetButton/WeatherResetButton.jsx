import React from 'react';
import { Button } from '@mui/material';

export default function RefreshButton({ onClick }) {
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            sx={{ bgcolor: 'primary.main', color: 'white', boxShadow: 1 , zIndex: 'modal' }}
        >
            Refresh
        </Button>
    );
}
