import React from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { config } from './config';

export default function Model({progress}) {

  const { nodes } = useGLTF("/medias/letters.glb");
  return (
    <group>
        <Mesh node={nodes.s} progress={progress}/>
        <Mesh node={nodes.h} progress={progress}/>
        <Mesh node={nodes.a} progress={progress}/>
        <Mesh node={nodes.p} progress={progress}/>
        <Mesh node={nodes.e} progress={progress}/>
        <Mesh node={nodes.s02} progress={progress}/>
    </group>
  );
}

useGLTF.preload("/medias/letters.glb");

function Mesh({node, progress}) {
    const { name, geometry, material, position, scale, rotation } = node;
    const properties = config.find(e => e.model == name)
    const { y, rotY, rotX } = properties;
    const positionY = useTransform(progress, [0, 1], [position.y - y, position.y + y])
    const rotationY = useTransform(progress, [0, 1], [rotation.y - rotY, rotation.y + rotY])
    const rotationX = useTransform(progress, [0, 1], [rotation.x - rotX, rotation.x + rotX])
    return (
        <motion.mesh
            castShadow={true}
            receiveShadow={true}
            geometry={geometry}
            material={material}
            position={position}
            rotation={rotation}
            scale={scale}
            rotation-y={rotationX}
            rotation-x={rotationY}
            position-y={positionY}
        />
    )
}
