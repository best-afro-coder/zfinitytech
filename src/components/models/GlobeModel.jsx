/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const GlobeModel = React.memo(function GlobeModel(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/globe-transformed.glb");

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[0.5, 0.5, 0.5]}
      rotation={[0.4, -1, 0]}
      position={[0, -1, 0]}
    >
     <mesh 
      geometry={nodes.Cylinder__0.geometry} 
      material={materials['Scene_-_Root']} 
      rotation={[-Math.PI / 2, 0, 0]} 
      scale={100} />
  
      
    </group>
  );
});

export default GlobeModel;
useGLTF.preload("/models/globe-transformed.glb");
