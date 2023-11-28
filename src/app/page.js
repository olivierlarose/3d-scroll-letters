'use client';
import styles from './page.module.scss'
import Letters from '../components/Letters';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    
    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return (
        <main className={styles.main}>
            <div style={{height: "120vh"}}></div>
            <div ref={container} className={styles.paragraph}>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className={styles.canvasContainer}>
                    <Letters progress={scrollYProgress}/>
                </div>
            </div>
            <div style={{height: "120vh"}}></div>
        </main>
    )
}
