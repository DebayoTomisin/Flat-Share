import React from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Roomates from "./components/roommates/Roomates"
import FeaturedRooms from "./components/featured-rooms/FeaturedRooms"
import Pitch from "./components/pitch/Pitch"


const Home = () => 
{
    return (
        <>
            <Header/>
            <Hero/>
            <Roomates/>
            <FeaturedRooms/>
            <Pitch/>
        </>
    )
}

export default Home
