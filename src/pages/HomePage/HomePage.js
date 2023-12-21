import React, { useEffect, useState } from 'react';
import Hero from '../../sections/HomePage/Hero/Hero'
import About from '../../sections/HomePage/About/About'
import Curriculum from '../../sections/HomePage/Curriculum/Curriculum';
import './styles.css'

function HomePage() {
    const [scrollCount, setScrollCount] = useState(0);

    useEffect(() => {
        const handleWheel = (event) => {
            // Detect whether the user scrolled up or down
            const delta = Math.sign(event.deltaY);

            // Update the scroll count, but prevent it from going below 0 and beyond 15
            setScrollCount((prevCount) => Math.min(14, Math.max(0, prevCount + delta)));
        };

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        const handleTouchStart = (event) => {
            // Store the initial touch position
            const startY = event.touches[0].clientY;

            const handleTouchMove = (moveEvent) => {
                // Calculate the distance moved
                const deltaY = moveEvent.touches[0].clientY - startY;

                // Detect whether the user scrolled up or down
                const delta = Math.sign(deltaY);

                // Update the scroll count, but prevent it from going below 0 and beyond 14
                setScrollCount((prevCount) => Math.min(14, Math.max(0, prevCount + delta)));
            };

            const handleTouchEnd = () => {
                // Clean up event listeners when touch ends
                window.removeEventListener('touchmove', handleTouchMove);
                window.removeEventListener('touchend', handleTouchEnd);
            };

            // Add event listeners for touchmove and touchend
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleTouchEnd);
        };

        // Add event listener for touchstart
        window.addEventListener('touchstart', handleTouchStart);

        return () => {
            // Remove touchstart listener when the component unmounts
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);


    console.log(scrollCount);


    console.log(scrollCount)
    return (
        <div className='Home'>
            <ul>
                <li className={scrollCount < 5 ? "active" : ""}><div className={scrollCount < 5 ? "active" : ""}></div>Home</li>
                <li className={5 <= scrollCount && scrollCount < 10 ? "active" : ""}><div className={5 <= scrollCount && scrollCount < 10 ? "active" : ""}></div>About</li>
                <li className={10 <= scrollCount && scrollCount < 15 ? "active" : ""}><div className={10 <= scrollCount && scrollCount < 15 ? "active" : ""}></div>Curriculum</li>
            </ul>
            <Hero scrollCount={scrollCount} />
            <About scrollCount={scrollCount} />
            <Curriculum scrollCount={scrollCount} />
        </div>
    )
}

export default HomePage