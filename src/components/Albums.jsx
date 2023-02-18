import React from 'react'
import { Album } from '../components/Album'

import {
    LINK_DISINTEGRATION,
    LINK_HOLV,
    LINK_MARQUEE_MOON,
    LINK_PINK_FLAG,
    LINK_RIL,
    LINK_VESPERTINE
} from '../links'

const album_items = [
    {
        key: 1,
        artist: "Björk",
        title: "Vespertine",
        link: LINK_VESPERTINE
    },
    {
        key: 2,
        artist: "Cocteau Twins",
        title: "Heaven or Las Vegas",
        link: LINK_HOLV
    },
    {
        key: 3,
        artist: "Wire",
        title: "Pink Flag",
        link: LINK_PINK_FLAG
    },
    {
        key: 4,
        artist: "Talking Heads",
        title: "Remain in Light",
        link: LINK_RIL
    },
    {
        key: 5,
        artist: "The Cure",
        title: "Disintegration",
        link: LINK_DISINTEGRATION
    },
    {
        key: 6,
        artist: "Television",
        title: "Marquee Moon",
        link: LINK_MARQUEE_MOON
    }
]

export const Albums = () => {
    const albums_items = album_items.map((album_item) => 
        <Album key={album_item.key} artist={album_item.artist} title={album_item.title} link={album_item.link} />
    );

    return (
        <div className="albums">
            <table className="albums-table">
                {albums_items}
            </table>
        </div>
    )
}