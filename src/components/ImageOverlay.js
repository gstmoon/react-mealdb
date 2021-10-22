import React from 'react'

export default function ImageOverlay({
    // border radius -> clockwise: TL TR BR BL
    borderRadius = "0px 0px 0px 0px",
    children,
    imgAlt = null,
    imgSrc,
}) {
    return (
        <div
            className="w-full h-full relative text-center"
            style={{ borderRadius: borderRadius }}>
            {/* image */}
            {/* TODO: replace with next Image */}
            <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-cover"
                style={{ borderRadius: borderRadius }}
            />

            {/* content */}
            <div
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-end box-border pb-5 text-white hover:text-black _linear-gradient-to-bottom-0-8"
                style={{ borderRadius: borderRadius }}>
                {children}
            </div>
        </div>
    )
}
