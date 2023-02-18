import React from "react"
import { Albums } from "../components/Albums"

export const Music = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1 className="albums-header">My favorite albums</h1>
                <Albums />
            </div>
        </div>
    )
}