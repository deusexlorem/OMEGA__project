import React from "react";
import TrendsSection from "../TrendsSection/TrendsSection";
import MovieSection from "../MovieSectoin/MovieSection";
import TvSection from "../TvSection/TvSection";



const Main = ( ) => {

    return (
        <div className="main__container">
            <TrendsSection/>

            <MovieSection/>

            <TvSection/>
        </div>
    )
}

export default Main;