import { Flex, Image } from "antd";
import React from "react";
import '../styles/home.css'


const RecentFilms = () => {
    return (
        <Flex
            justify="space-evenly"
        >
            <div className="poster_container">
                <Image 
                    // height={'100%'}
                    src="/assets/guillotine_poster.jpg"
                />    
            </div>
            <div className="poster_container">
                <Image 
                    // height={'100%'}
                    src="/assets/hoop_dreams_poster.jpg"
                />    
            </div>
            <div className="poster_container">
                <Image 
                    // height={'100%'}
                    src="/assets/kill_bill_poster.jpg"
                />    
            </div>
            <div className="poster_container">
                <Image 
                    // height={'100%'}
                    src="/assets/mononoke_poster.jpg"
                />    
            </div>
        </Flex>
    )
}

export default RecentFilms