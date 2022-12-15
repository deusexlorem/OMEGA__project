import React from "react";
import DailyOffer from "../DailyOffer/DailyOffer";
import MovieSection from "../MovieSectoin/MovieSection";
import TvSection from "../TvSection/TvSection";

const Main = ( ) => {

    return (
        <div className="main__container">
            <DailyOffer/>

            <MovieSection/>

            <TvSection/>
        </div>
    )
}

export default Main;