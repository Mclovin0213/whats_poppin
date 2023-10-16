import { Box, Container, Paper, Grid, Typography } from '@mui/material'
import React from 'react'
import '../styles/index.css'

const ReviewCarousel = () => {
  return (
    <Box>
        <Container maxWidth="xl">
            <Paper 
                sx={{
                    width: "100%",
                    height: "50vh",
                }}
            >
                <Grid container spacing={0} border={1}>
                    <Grid item xs={4}>
                        <Typography 
                            variant='h3'
                            align='center'
                        >
                            The Super Mario Bros. Movie
                        </Typography>
                        <Typography
                            align='center'
                        >
                            An action-packed, heartwarming adventure that brings an iconic video game world to life as two brothers overcome challenges and discover the power of family, friendship, and love.
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Box
                            sx={{
                                width: "auto",
                                height: "vh",
                            }}
                        >
                            <img src='https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2022/11/Screenshot-2022-11-29-at-8.49.23-PM.png?fit=1200%2C500&ssl=1' />
                        </Box>
                    </Grid>
                </Grid>
            </Paper> 
        </Container>
    </Box>
  )
}

export default ReviewCarousel