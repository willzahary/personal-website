import React from 'react'
import { CourseLink } from '../components/CourseLink'

import {
    LINK_COMP302,
    LINK_COMP330,
    LINK_COMP525,
    LINK_MATH350,
    LINK_MATH456
} from '../links'

const courselink_items = [
    {
        key: 1,
        code: "COMP 302",
        title: "Languages and Paradigms",
        link: LINK_COMP302,
    },
    {
        key: 2,
        code: "COMP 330",
        title: "Automata Theory",
        link: LINK_COMP330,
    },
    {
        key: 3,
        code: "COMP 525",
        title: "Formal Verification",
        link: LINK_COMP525,
    },
    {
        key: 4,
        code: "MATH 350",
        title: "Graph Theory",
        link: LINK_MATH350,
    },
    {
        key: 5,
        code: "MATH 456",
        title: "Group Theory",
        link: LINK_MATH456,
    },
]

export const CourseLinks = () => {
    const courselinks_items = courselink_items.map((courselink_item) => 
        <CourseLink key={courselink_item.key} code={courselink_item.code} title={courselink_item.title} link={courselink_item.link} />
    );

    return (
        <div className="courselinks">
            {courselinks_items}
        </div>
    )
}
