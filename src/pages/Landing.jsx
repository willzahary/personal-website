import React from 'react'
import { Links } from '../components/Links'
import logo from '../logo.svg'


export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Will Zahary</h1>
                <p>
                    I study <a href="/courses" className="inline-link">math and computer science</a> at McGill. I'm primarily interested in algorithms and probability.
                </p>
                <p>
                    I currently live in San Francisco. I'll be back in Montréal in August.
                </p>
                <Links />
            </div>
        </div>
    )
}
