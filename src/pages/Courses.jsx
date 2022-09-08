import React from "react"
import { CourseLinks } from "../components/CourseLinks"

export const Courses = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Courses</h1>
                <CourseLinks />
            </div>
        </div>
    )
}