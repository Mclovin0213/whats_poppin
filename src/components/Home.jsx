import React, { Component } from 'react'
import { Typography, Layout, Divider, Carousel, Image } from 'antd'
import NavBoxes from './NavBoxes'
import RecentFilms from './RecentFilms'

const { Title } = Typography
const { Header, Content, Footer} = Layout

const contentStyle = {
  color: '#fff',
  background: '#364d79',
  justifySelf: 'center'
};

export class Home extends Component {
  render() {
    return (
      <>
        <Title style={{
            fontFamily: 'Warriot, sans-serif',
            fontSize: '7vw',
            fontWeight: '400',
            color: '#FFBB5C',
            margin:'0',
            padding:'0',
            textAlign:'center'
        }}>
            What`s Poppin
        </Title>
        <Divider style={{borderColor: '#EEEEEE', margin: '0', padding: '0'}}/>
        {/* <NavBoxes /> */}
        <Carousel 
          autoplay
          autoplaySpeed={20000}
          fade={true}
          dots={true}
          style={{
            paddingLeft: '15vw',
            paddingRight: '15vw',
            paddingTop:'4vh',
          }}
        >
          <div>
            <Image
              height={'100%'}
              width={'100%'}
              style={contentStyle}
              src='/assets/panic_large.jpg'
            />
          </div>
          <div>
            <Image
              height={'100%'}
              width={'100%'}
              style={contentStyle}
              src='/assets/villains_large.jpg'
            />
          </div>
          <div>
            <Image
              height={'100%'}
              width={'100%'}
              style={contentStyle}
              src='/assets/police_story_large.jpg'
            />
          </div>
          <div>
            <Image
              height={'100%'}
              width={'100%'}
              style={contentStyle}
              src='/assets/babylon_large.jpg'
            />
          </div>
        </Carousel>
        <RecentFilms />
      </>
    )
  }
}

export default Home