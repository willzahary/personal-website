import React from 'react'
import { Links } from '../components/Links'
import logo from '../logo.svg'


export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Hi, I'm Will Zahary.</h1>
                <p>
                    I'm a software developer studying mathematics and computer science at McGill University.
                </p>
                <p>
                    This past summer, I interned as a software engineer at Amazon in Vancouver. Now, I'm back in Montréal, taking <a href="/courses" className="inline-link">some courses that interest me</a>.
                </p>
                <p>
                    Next summer, I'll be in San Francisco interning at <a href="https://databricks.com/" className="inline-link">Databricks</a>.
                </p>
                <Links />
            </div>
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}
