import React from 'react'
import { Links } from '../components/Links'
import logo from '../logo.svg'


export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Hi, I'm Will Zahary.</h1>
                <p>
                    I'm a software developer studying mathematics and computer science at McGill University, with specific interests in group theory, probability theory, and algorithm design.
                </p>
                <p>
                    This past summer, I interned as a software engineer at Amazon in Vancouver, BC, working in the transportation organization. Now, I'm back in Montréal, taking <a href="/courses" className="inline-link">some courses that interest me</a>.
                </p>
                <Links />
            </div>
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}
