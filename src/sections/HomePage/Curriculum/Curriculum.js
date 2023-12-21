import React from 'react'
import './styles.css'

function Curriculum({ scrollCount }) {
    return (
        <div className='Curriculum' style={{ opacity: 10 < scrollCount && scrollCount < 15 ? "1" : "0" }}>
            <h1 style={{ left: 10 < scrollCount && scrollCount < 15 ? "0" : `${-3000}px` }}>This Is A School</h1>
            <h1 style={{ right: 10 < scrollCount && scrollCount < 15 ? "0" : `${-3000}px` }}>Enroll Now</h1>
        </div>
    )
}

export default Curriculum