import React from 'react'

export const CourseLink = ({ link, code, title }) => {
    return (
        <p className="course">
            <a
                className='courselink'
                href={link}
                target="_blank"
                rel='noopener noreferrer'
            >
                {code}
            </a>
            &nbsp;&nbsp;{title}
        </p>
    )
}
