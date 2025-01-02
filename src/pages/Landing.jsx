import React from 'react'
import { Links } from '../components/links/Links'
// import axios from 'axios'
import { useState, useEffect } from 'react'

// going to do this with a proper backend...

// const LASTFM_KEY = process.env.REACT_APP_LASTFM_KEY

// const getTopAlbum = async () => {
//     const res = axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=willzahary&period=7day&limit=1&api_key=${LASTFM_KEY}&format=json`)
//     console.log(res)
//     return res;
// }

export const Landing = () => {

    const [albumTitle, setAlbumTitle] = useState("Diamond Jubilee")
    const [artistName, setArtistName] = useState("Cindy Lee")

    // useEffect(() => {
    //     getTopAlbum()
    //     .then(res => {
    //         let data = res.data.topalbums.album[0];
    //         setAlbumTitle(data.name);
    //         setArtistName(data.artist.name);
    //     })
    // })

    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Will Zahary</h1>
                <p>I'm a software engineer and computer science graduate student at McGill University. I do probability and algorithms research with <a target="_blank" rel="noopener noreferrer" href="http://luc.devroye.org">Luc Devroye</a>.</p>
                <p>I lectured <a target="_blank" rel="noopener noreferrer" href="https://www.mcgill.ca/study/2024-2025/courses/comp-251">algorithms</a> with Giulia Alberini in Fall 2024. The course material I wrote can be found <a href="/comp251">here</a>.</p>
                <p className="landing-cities">I'm originally from <a className='map' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Edmonton,+AB+T6J">Edmonton</a>, but I live in <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Mile+End,+Montreal,+QC">Montreal</a> right now. I'm moving to <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/San+Francisco,+CA,+USA">San Francisco</a> indefinitely in September.</p>
                <p>My favorite album this week: {albumTitle} by {artistName} </p>
                <Links />
            </div>
            <div className="landing-image">
                <img src="files/noe-valley.jpg" alt="house in san francisco" />
            </div>
            <div className="landing-image-mobile">
                <img src="files/hard-at-work.jpg" alt="me, hard at work" />
            </div>
        </div>
    )
}
