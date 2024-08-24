import React from 'react'
import { Links } from '../components/links/Links'

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Will Zahary</h1>
                <p>I'm a software engineer and computer science graduate student at McGill University under the supervision of <a target="_blank" rel="noopener noreferrer" href="http://luc.devroye.org">Luc Devroye</a>. My research interests are <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Branching_process">branching processes</a> and <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Distributed_computing">distributed computing</a>.</p> 
                <p>I'm lecturing <a target="_blank" rel="noopener noreferrer" href="https://www.mcgill.ca/study/2024-2025/courses/comp-251">COMP 251</a> with Giulia Alberini this Fall.</p>
                <p className="landing-cities">I'm originally from <a className='map' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Edmonton,+AB+T6J">Edmonton</a>, but I live in <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Mile+End,+Montreal,+QC">Montreal</a> right now.</p>
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
