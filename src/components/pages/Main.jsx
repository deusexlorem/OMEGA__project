import {React, useEffect, useState} from "react";
import TrendsSection from "../TrendsSection/TrendsSection";
import MovieSection from "../MovieSectoin/MovieSection";
import TvSection from "../TvSection/TvSection";



const Main = ( ) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.innerWidth)};
        return () => {window.onresize = false};
    }, [windowWidth])

    return (
        <div className="main__container">
            <TrendsSection/>

            <MovieSection width = {windowWidth}/>

            <TvSection width = {windowWidth}/>
        </div>
    )
}

export default Main;