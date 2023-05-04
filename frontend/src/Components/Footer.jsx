import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: 46 }}>
        <Box 
            sx={{ textAlign: 'center', bgcolor: 'primary.main', verticalAlign: 'center' }}
        >
            <Typography variant='h6' className='pt-2'>© Sebastian Gerz, Johann Pinske, Janek Johanns, Colin Simon</Typography>
        </Box>
    </AppBar>
  )
}

export default Footer