import React from 'react'
import { Links } from '../components/Links'

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                {/* <h1 className="will">William</h1> */}
                <h1>Will Zahary</h1>
                <p>I study math and computer science at McGill University, and I am beginning graduate studies under the supervision of <a href="http://luc.devroye.org">Luc Devroye</a> in 2024. My interests are <a href="https://en.wikipedia.org/wiki/Discrete-time_Markov_chain">discrete-time Markov processes</a> and <a href="https://en.wikipedia.org/wiki/Branching_process">branching processes</a>.</p>
                <p>I'm originally from <a className='map' href="https://www.google.com/maps/place/Edmonton,+AB+T6J">Edmonton</a>, but I live in <a className='map' href="https://www.google.com/maps/place/Montreal,+QC+H2J">Montréal</a> now. I have also resided in <a className='map' href="https://www.google.com/maps/place/Vancouver,+BC+V6B">Vancouver</a> and <a className='map' href="https://www.google.com/maps/place/San+Francisco,+CA+94114,+USA">San Francisco</a>.</p>
                <Links />
            </div>
            <div className="landing-image">
                <img src="files/noe-valley.jpg" alt="house in san francisco" />
            </div>
        </div>
    )
}
