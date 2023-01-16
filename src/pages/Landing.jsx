import React from 'react'
import { Links } from '../components/Links'
import logo from '../logo.svg'


export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Hi, I'm Will Zahary</h1>
                <p>
                    I study <a href="/courses" className="inline-link">math and computer science</a> at McGill University. I'm primarily interested in algorithms and algebra.
                </p>
                <p>
                    Right now, I'm one of the course assistants for Honours Algorithms taught by Luc Devroye.
                </p>
                <p>
                    This summer, I'll be interning at <a href="https://databricks.com/" className="inline-link">Databricks</a> in San Francisco.
                </p>
                <Links />
            </div>
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}
