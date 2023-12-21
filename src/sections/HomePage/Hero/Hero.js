import React from 'react'
import './styles.css'

function Hero({ scrollCount }) {

    return (
        <div className='Hero' style={{ opacity: scrollCount < 5 ? "1" : "0" }}>
            <div className='hero-wrapper'>
                <div className='hero-left' style={{ left: scrollCount < 5 ? "0" : `${-3000}px` }}>Hello</div>
                <div className='hero-right' style={{ right: scrollCount < 5 ? "0" : `${-3000}px` }}>How Are You</div>
            </div>
        </div>
    )
}

export default Hero