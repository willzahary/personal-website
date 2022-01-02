import React from 'react'
import { Links } from '../components/Links'
import logo from '../logo.svg'


export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Hi, I'm Will Zahary.</h1>
                <p>
                    I'm a software developer studying mathematics and computer science at McGill University, with specific interests in group theory and algorithms.
                </p>
                <p>
                    This summer, I'll be interning as a software engineer at Amazon in Vancouver, BC.
                </p>
                <Links />
            </div>
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}
