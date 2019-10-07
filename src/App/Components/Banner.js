import React from 'react'

const Banner = ({color, image, title, subtitle}) => {
    return (
        <div className={`main-banner ${color}`}>
            <div className="content-banner">
                <img
                src={image.src}
                alt={image.alt}
                className="banner-img"
                />
                <div className="banner-data">
                    <h1 className="banner-title">{title}</h1>
                    <p className="banner-subtitle">{subtitle}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
