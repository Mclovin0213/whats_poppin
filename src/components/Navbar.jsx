import React from 'react'
import '../styles/navbar.css'
import { Divider, Box, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          pl: "1em",
          mt: "0",
        }}
      >
        <Typography 
          className='title'
          fontFamily={'Tonight'}
          color={'#EA5455'}
          fontSize={80}
          sx={{
            p: 0,
            m: 0
          }}
        >
          What's Poppin
        </Typography>
      </Box>
      <Divider 
        sx={{
          bgcolor: "black",
        }}
        variant='middle'

      />
      <Box>
        <ul class="nav_links">
          <li><a href="golden_kernels.html">Golden Kernels</a></li>
          <li><a href="lists.html">Lists</a></li>
          <li><a href="all_reviews.html">All Reviews</a></li>
        </ul>
      </Box>
    </>
  )
}

export default Navbar