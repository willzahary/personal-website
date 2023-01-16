import React from 'react'
import { CourseLink } from '../components/CourseLink'

import {
    LINK_COMP302,
    LINK_COMP330,
    LINK_COMP362,
    LINK_COMP525,
    LINK_COMP535,
    LINK_MATH255,
    LINK_MATH350,
    LINK_MATH456,
    LINK_MATH457,
    LINK_MATH553
} from '../links'

const courselink_items = [
    {
        key: 1,
        code: "COMP 362",
        title: "Algorithm Design",
        link: LINK_COMP362,
    },
    {
        key: 2,
        code: "COMP 535",
        title: "Computer Networks",
        link: LINK_COMP535,
    },
    {
        key: 3,
        code: "MATH 255",
        title: "Analysis 2",
        link: LINK_MATH255,
    },
    {
        key: 4,
        code: "MATH 457",
        title: "Rings & Galois Theory",
        link: LINK_MATH457,
    },
    {
        key: 5,
        code: "MATH 553",
        title: "Algorithmic Game Theory",
        link: LINK_MATH553,
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
