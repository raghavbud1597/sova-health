import React from 'react'

export default function SocialMedia({
    link="#",
    src
}) {
    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={src} alt="Facebook" height="42px" width="42px"/>
            </a>
        </div>
    )
}
