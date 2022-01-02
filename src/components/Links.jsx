import React from 'react'
import { Link } from '../components/Link'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
    LINK_RESUME,
    LINK_LINKEDIN,
    LINK_GITHUB,
    LINK_TWITTER,
    EMAIL,
} from '../links'

const link_items = [
    {
        key: 1,
        name: "Resume",
        link: LINK_RESUME,
        icon: ['fas', 'file-alt']
    },
    {
        key: 2,
        name: "LinkedIn",
        link: LINK_LINKEDIN,
        icon: ['fab', 'linkedin'],
    },
    {
        key: 3,
        name: "GitHub",
        link: LINK_GITHUB,
        icon: ['fab', 'github'],
    },
    {
        key: 4,
        name: "Twitter",
        link: LINK_TWITTER,
        icon: ['fab', 'twitter'],
    },
    {
        key: 5,
        name: "Email",
        link: null,
        copy: EMAIL,
        icon: ['fas', 'envelope'],
    }
]

export const Links = () => {
    const links_items = link_items.map((link_item) => 
        <Link key={link_item.key} name={link_item.name} link={link_item.link} icon={link_item.icon} copy={link_item.copy} />
    );

    return (
        <div className="links">
            {links_items}
        </div>
    )
}
