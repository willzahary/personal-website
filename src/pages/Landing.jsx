import React from 'react'
import { Links } from '../components/Links'

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                {/* <h1 className="will">William</h1> */}
                <h1>Will Zahary</h1>
                <p>I am a software engineer and a computer science graduate student at McGill University under the supervision of <a href="http://luc.devroye.org">Luc Devroye</a>. My research interests are <a href="https://en.wikipedia.org/wiki/Branching_process">branching processes</a> and <a href="https://en.wikipedia.org/wiki/Distributed_computing">distributed computing</a>.</p> 
                <p>I'm originally from <a className='map' href="https://www.google.com/maps/place/Edmonton,+AB+T6J">Edmonton</a>, but I live in <a href="https://www.google.com/maps/place/Capitol+Hill,+Seattle,+WA">Capitol Hill, Seattle</a> right now.</p>
                <Links />
            </div>
            <div className="landing-image">
                <img src="files/noe-valley.jpg" alt="house in san francisco" />
            </div>
        </div>
    )
}
