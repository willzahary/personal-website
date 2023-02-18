import React from 'react'

export const Album = ({ link, artist, title }) => {
    return (
        <tr className="album">
            <td className="album-title">
                {title}
            </td>
            <td className="album-artist">
                {artist}
            </td>
            <td className="album-link-wrapper">
                <a 
                    className="album-link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    [spotify]
                </a>
            </td>
        </tr>
    )
}
