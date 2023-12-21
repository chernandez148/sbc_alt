import React from 'react'
import './styles.css'

function About({ scrollCount }) {
    return (
        <div className='About' style={{ opacity: 5 <= scrollCount && scrollCount < 10 ? "1" : "0" }}>
            <div className='about-wrapper'>
                <h1 style={{ top: 5 < scrollCount && scrollCount < 10 ? "0" : `${-3000}px` }}>Whast Up?</h1>
                <h1 style={{ bottom: 5 < scrollCount && scrollCount < 10 ? "0" : `${-3000}px` }}>Hey You!</h1>
            </div>

        </div>
    )
}

export default About