import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

export const Link = ({ link, icon, name, copy }) => {

    const [copied, setCopied] = useState(false)

    if (link !== null) {
        return (
            <>
                <a
                    className='link'
                    href={link}
                    target="_blank"
                    rel='noopener noreferrer'
                >
                    <p className='link-sub'>[{name}]</p>
                </a>
            </>
        )
    }
    return (
            <>
                <CopyToClipboard
                    className='link'
                    text={copy}
                    onCopy={() => setCopied(true)}
                >
                <span>
                    <p className='link-sub'>{ copied ? "[Copied Email]" : "[Copy Email]" }</p>
                </span>
                </CopyToClipboard>
            </>
    )
}
