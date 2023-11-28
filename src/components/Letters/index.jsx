'use client';
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'

export default function Index({progress}) {

    return (
        <Canvas orthographic camera={{position: [0, 0, 100], zoom: 250}}>
            <directionalLight color={"red"} intensity={10} position={[2, -.2, -2]} />
            <Model progress={progress}/>
            <Environment preset='dawn'/>
        </Canvas>
    )
}
