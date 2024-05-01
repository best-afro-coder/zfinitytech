
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BeetleModel(props) {
  const { nodes, materials} = useGLTF('/models/beetle-transformed.glb')

  const modelRef = useRef();
  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    modelRef.current.rotation.y += 0.1;
  });



  return (
    <group 
       ref={modelRef} {...props} 
       dispose={null}
       position={[0, -1.5, 0]}
       scale={[0.06, 0.06, 0.06]}
       rotation={[0.25, 0, 0]}>
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.01}>
          <group name="Cube079" position={[9.841, 60.175, -11.311]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube079_body_0" geometry={nodes.Cube079_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube082" position={[-0.787, 59.37, 21.466]} rotation={[-1.571, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Cube082_body_0" geometry={nodes.Cube082_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube083" position={[-0.788, 55.786, 44.766]} rotation={[-1.546, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Cube083_body_0" geometry={nodes.Cube083_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube084" position={[8.762, 77.788, 5.701]} rotation={[2.561, -0.267, -1.059]} scale={100.001}>
            <mesh name="Cube084_body_0" geometry={nodes.Cube084_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube085" position={[3.7, 78.241, -1.603]} rotation={[2.196, -0.329, -1.227]} scale={[100, 100, 100.001]}>
            <mesh name="Cube085_body_0" geometry={nodes.Cube085_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube088" position={[13.386, 73.674, 2.917]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube088_body_0" geometry={nodes.Cube088_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube089" position={[18.443, 61.455, -18.386]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube089_body_0" geometry={nodes.Cube089_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube090" position={[12.93, 59.082, -30.835]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube090_body_0" geometry={nodes.Cube090_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube091" position={[-0.782, 61.772, 14.459]} rotation={[-1.571, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Cube091_body_0" geometry={nodes.Cube091_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube093" position={[-0.81, 60.454, 27.069]} rotation={[-1.571, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Cube093_body_0" geometry={nodes.Cube093_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube094" position={[10.488, 87.121, 15.826]} rotation={[-0.217, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube094_body_0" geometry={nodes.Cube094_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube095" position={[26.314, 61.71, 6.083]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Cube095_body_0" geometry={nodes.Cube095_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube096" position={[28.1, 61.544, -16.415]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Cube096_body_0" geometry={nodes.Cube096_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube097" position={[25.23, 62.996, -15.326]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Cube097_body_0" geometry={nodes.Cube097_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube098" position={[-0.788, 51.539, 48.049]} rotation={[1.681, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube098_body_0" geometry={nodes.Cube098_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube100" position={[-0.808, 63.275, 42.437]} rotation={[-1.546, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Cube100_body_0" geometry={nodes.Cube100_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder056" position={[22.458, 54.933, 5.987]} rotation={[1.571, 1.248, -1.571]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder056_body_0" geometry={nodes.Cylinder056_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube103" position={[29.916, 59.973, 6.358]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Cube103_body_0" geometry={nodes.Cube103_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube105" position={[12.111, 78.098, 14.614]} rotation={[-0.217, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube105_body_0" geometry={nodes.Cube105_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube106" position={[19.59, 80.587, 10.809]} rotation={[-0.217, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube106_body_0" geometry={nodes.Cube106_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube107" position={[20.11, 85.294, 9.914]} rotation={[-0.217, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube107_body_0" geometry={nodes.Cube107_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder057" position={[-0.779, 54.497, 55.443]} rotation={[0.024, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder057_body_0" geometry={nodes.Cylinder057_body_0.geometry} material={materials.body} />
          </group>
          <group name="Plane047" position={[4.568, 47.596, 48.645]} rotation={[1.549, 1.025, -2.907]} scale={[100.001, 100, 100.001]}>
            <mesh name="Plane047_body_0" geometry={nodes.Plane047_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder058" position={[0.978, 57.884, 52.093]} rotation={[0.024, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder058_body_0" geometry={nodes.Cylinder058_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere015" position={[-5.128, 58.062, 32.781]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Sphere015_body_0" geometry={nodes.Sphere015_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder059" position={[3.299, 55.471, 52.093]} rotation={[0.024, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder059_body_0" geometry={nodes.Cylinder059_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder060" position={[2.135, 52.595, 52.093]} rotation={[0.024, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder060_body_0" geometry={nodes.Cylinder060_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere016" position={[23.473, 54.225, 6.039]} rotation={[-1.571, 0.322, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Sphere016_body_0" geometry={nodes.Sphere016_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere017" position={[17.404, 74.674, 9.083]} rotation={[-Math.PI / 2, 0, 0]} scale={3.84}>
            <mesh name="Sphere017_body_0" geometry={nodes.Sphere017_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice008" position={[-0.754, 70.628, 20.017]} rotation={[-1.571, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Slice008_body_0" geometry={nodes.Slice008_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice009" position={[-0.755, 71.433, 20.702]} rotation={[-1.571, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Slice009_body_0" geometry={nodes.Slice009_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice010" position={[-0.883, 69.448, 25.353]} rotation={[-1.571, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Slice010_body_0" geometry={nodes.Slice010_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice011" position={[33.943, 59.119, 7.015]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Slice011_body_0" geometry={nodes.Slice011_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice012" position={[32.006, 60.728, -18.155]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Slice012_body_0" geometry={nodes.Slice012_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice013" position={[24.966, 63.448, 5.811]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Slice013_body_0" geometry={nodes.Slice013_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice014" position={[23.947, 64.717, -14.898]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Slice014_body_0" geometry={nodes.Slice014_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere018" position={[15.796, 53.237, 16.173]} rotation={[-1.041, 0.126, -1.36]} scale={[100.001, 100, 100.002]}>
            <mesh name="Sphere018_body_0" geometry={nodes.Sphere018_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder062" position={[20.299, 54.291, -13.927]} rotation={[2.359, 1.132, -2.404]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder062_body_0" geometry={nodes.Cylinder062_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere019" position={[21.944, 53.34, -14.415]} rotation={[-1.664, 0.29, 0.334]} scale={[100, 100, 100.002]}>
            <mesh name="Sphere019_body_0" geometry={nodes.Sphere019_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice015" position={[-0.912, 63.972, 46.953]} rotation={[-1.546, 0, Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Slice015_body_0" geometry={nodes.Slice015_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere022" position={[3.299, 55.437, 54.15]} scale={[100, 100.002, 100]}>
            <mesh name="Sphere022_body_0" geometry={nodes.Sphere022_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere023" position={[0.945, 57.854, 54.15]} scale={[100, 100.002, 100]}>
            <mesh name="Sphere023_body_0" geometry={nodes.Sphere023_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere024" position={[2.169, 52.522, 54.15]} scale={[100, 100.002, 100]}>
            <mesh name="Sphere024_body_0" geometry={nodes.Sphere024_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder075" position={[-0.38, 53.77, 8.306]} rotation={[-0.312, -1.557, 2.997]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder075_body_0" geometry={nodes.Cylinder075_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder076" position={[-0.516, 53.769, -4.098]} rotation={[-0.312, -1.557, 2.997]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder076_body_0" geometry={nodes.Cylinder076_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder077" position={[-0.797, 54.327, -15.964]} rotation={[1.012, -1.547, -1.962]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder077_body_0" geometry={nodes.Cylinder077_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder078" position={[-0.797, 54.327, -28.35]} rotation={[1.012, -1.547, -1.962]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder078_body_0" geometry={nodes.Cylinder078_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere025" position={[-16.882, 53.237, 16.173]} rotation={[-1.041, 0.126, -1.36]} scale={[100.001, 100, 100.002]}>
            <mesh name="Sphere025_body_0" geometry={nodes.Sphere025_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere026" position={[-24.559, 54.226, 6.038]} rotation={[-1.571, 0.322, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Sphere026_body_0" geometry={nodes.Sphere026_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube109" position={[19.591, 64.507, 2.676]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube109_body_0" geometry={nodes.Cube109_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube110" position={[-14.633, 73.673, 2.911]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube110_body_0" geometry={nodes.Cube110_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube111" position={[-20.763, 64.543, 2.682]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube111_body_0" geometry={nodes.Cube111_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube112" position={[-10.927, 60.175, -11.311]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube112_body_0" geometry={nodes.Cube112_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube115" position={[-9.848, 77.788, 5.701]} rotation={[2.561, -0.267, -1.059]} scale={100.001}>
            <mesh name="Cube115_body_0" geometry={nodes.Cube115_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube116" position={[-4.786, 78.241, -1.603]} rotation={[2.196, -0.329, -1.227]} scale={[100, 100, 100.001]}>
            <mesh name="Cube116_body_0" geometry={nodes.Cube116_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube117" position={[-0.618, 76.194, -17.702]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube117_body_0" geometry={nodes.Cube117_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube118" position={[9.948, 73.299, -17.943]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube118_body_0" geometry={nodes.Cube118_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube119" position={[-19.68, 61.456, -18.386]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube119_body_0" geometry={nodes.Cube119_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube120" position={[-11.185, 73.299, -17.943]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube120_body_0" geometry={nodes.Cube120_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube121" position={[-0.618, 63.384, -32.4]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube121_body_0" geometry={nodes.Cube121_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube122" position={[6.262, 61.942, -32.686]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube122_body_0" geometry={nodes.Cube122_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube123" position={[-14.167, 59.082, -30.835]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube123_body_0" geometry={nodes.Cube123_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube124" position={[-7.499, 61.942, -32.686]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Cube124_body_0" geometry={nodes.Cube124_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube125" position={[-10.45, 87.066, 15.943]} rotation={[-0.192, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube125_body_0" geometry={nodes.Cube125_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube126" position={[-27.889, 61.711, 6.083]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Cube126_body_0" geometry={nodes.Cube126_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube127" position={[-29.674, 61.544, -16.415]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Cube127_body_0" geometry={nodes.Cube127_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube128" position={[-26.804, 62.996, -15.326]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Cube128_body_0" geometry={nodes.Cube128_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder079" position={[-23.544, 54.934, 5.987]} rotation={[1.571, 1.248, -1.571]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder079_body_0" geometry={nodes.Cylinder079_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube129" position={[-31.491, 59.974, 6.358]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Cube129_body_0" geometry={nodes.Cube129_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube130" position={[-12.14, 78.094, 14.473]} rotation={[-0.192, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube130_body_0" geometry={nodes.Cube130_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube131" position={[-19.528, 80.755, 10.603]} rotation={[-0.192, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube131_body_0" geometry={nodes.Cube131_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube132" position={[-19.984, 85.489, 9.819]} rotation={[-0.192, -0.008, -0.007]} scale={[100, 100.002, 100]}>
            <mesh name="Cube132_body_0" geometry={nodes.Cube132_body_0.geometry} material={materials.body} />
          </group>
          <group name="Plane046" position={[7.036, 51.681, 49.695]} rotation={[1.549, 1.025, -2.907]} scale={[100.001, 100, 100.001]}>
            <mesh name="Plane046_body_0" geometry={nodes.Plane046_body_0.geometry} material={materials.body} />
          </group>
          <group name="Plane066" position={[-6.143, 47.596, 48.645]} rotation={[1.549, 1.025, -2.907]} scale={[100.001, 100, 100.001]}>
            <mesh name="Plane066_body_0" geometry={nodes.Plane066_body_0.geometry} material={materials.body} />
          </group>
          <group name="Plane067" position={[-8.611, 51.681, 49.695]} rotation={[1.549, 1.025, -2.907]} scale={[100.001, 100, 100.001]}>
            <mesh name="Plane067_body_0" geometry={nodes.Plane067_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder080" position={[-2.553, 57.884, 52.093]} rotation={[0.024, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder080_body_0" geometry={nodes.Cylinder080_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere027" position={[3.553, 58.062, 32.781]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Sphere027_body_0" geometry={nodes.Sphere027_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder081" position={[-4.874, 55.471, 52.093]} rotation={[0.024, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder081_body_0" geometry={nodes.Cylinder081_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder082" position={[-3.71, 52.595, 52.093]} rotation={[0.024, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder082_body_0" geometry={nodes.Cylinder082_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere028" position={[-18.651, 74.674, 9.083]} rotation={[-Math.PI / 2, 0, 0]} scale={3.84}>
            <mesh name="Sphere028_body_0" geometry={nodes.Sphere028_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice016" position={[-35.518, 59.12, 7.015]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Slice016_body_0" geometry={nodes.Slice016_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice017" position={[-33.581, 60.729, -18.155]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Slice017_body_0" geometry={nodes.Slice017_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice018" position={[-26.541, 63.448, 5.811]} rotation={[1.625, -0.292, 0.185]} scale={[100, 100, 100.002]}>
            <mesh name="Slice018_body_0" geometry={nodes.Slice018_body_0.geometry} material={materials.body} />
          </group>
          <group name="Slice019" position={[-25.522, 64.717, -14.898]} rotation={[1.473, -0.281, -0.341]} scale={[100, 100, 100.002]}>
            <mesh name="Slice019_body_0" geometry={nodes.Slice019_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cylinder083" position={[-21.385, 54.292, -13.927]} rotation={[2.359, 1.132, -2.404]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder083_body_0" geometry={nodes.Cylinder083_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere029" position={[-23.03, 53.341, -14.416]} rotation={[-1.664, 0.29, 0.334]} scale={[100, 100, 100.002]}>
            <mesh name="Sphere029_body_0" geometry={nodes.Sphere029_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere030" position={[-4.857, 55.437, 54.15]} scale={[100, 100.002, 100]}>
            <mesh name="Sphere030_body_0" geometry={nodes.Sphere030_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere031" position={[-2.503, 57.854, 54.15]} scale={[100, 100.002, 100]}>
            <mesh name="Sphere031_body_0" geometry={nodes.Sphere031_body_0.geometry} material={materials.body} />
          </group>
          <group name="Sphere032" position={[-3.726, 52.522, 54.15]} scale={[100, 100.002, 100]}>
            <mesh name="Sphere032_body_0" geometry={nodes.Sphere032_body_0.geometry} material={materials.body} />
          </group>
          <group name="Cube080" position={[19.206, 38.327, 29.881]} rotation={[3.119, 0, 1.571]} scale={[100.002, 100, 100]}>
            <mesh name="Cube080_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube080_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube081" position={[19.278, 25.568, 37.56]} rotation={[2.065, 0, Math.PI / 2]} scale={[84.368, 84.367, 84.368]}>
            <mesh name="Cube081_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube081_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube087" position={[19.278, 30.221, 26.866]} rotation={[1.599, 0, Math.PI / 2]} scale={[100, 100, 100.002]}>
            <mesh name="Cube087_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube087_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube099" position={[52.615, 34.366, 8.846]} rotation={[-2.851, -1.488, 1.869]} scale={[100.002, 100, 100]}>
            <mesh name="Cube099_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube099_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane044" position={[19.378, 16.422, 47.455]} rotation={[-0.022, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Plane044_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane044_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder061" position={[50.62, 26.202, 8.555]} rotation={[3.142, 0.08, -3.142]} scale={[99.999, 100.003, 100]}>
            <mesh name="Cylinder061_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder061_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube108" position={[49.348, 34.021, -26.283]} rotation={[-0.055, -1.118, -1.612]} scale={[100.002, 100, 100]}>
            <mesh name="Cube108_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube108_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder064" position={[47.481, 25.857, -25.522]} rotation={[3.142, -0.452, -3.142]} scale={[99.999, 100.003, 100]}>
            <mesh name="Cylinder064_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder064_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder066" position={[19.401, 21.324, 47.269]} rotation={[3.141, 1.539, -3.141]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder066_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder066_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder067" position={[19.402, 27.981, 25.141]} rotation={[3.141, 1.539, -3.141]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder067_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder067_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane063" position={[49.235, 18.808, 8.178]} rotation={[1.416, 1.087, -1.39]} scale={[100, 100.002, 100.001]}>
            <mesh name="Plane063_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane063_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder072" position={[21.826, 36.031, 26.244]} rotation={[-1.459, 0.058, -0.004]} scale={[100, 100, 100.002]}>
            <mesh name="Cylinder072_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder072_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder073" position={[17.165, 36.19, 26.244]} rotation={[-1.459, -0.109, 0.015]} scale={[100, 100, 100.002]}>
            <mesh name="Cylinder073_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder073_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane059" position={[46.572, 19.052, -25.211]} rotation={[2.233, 0.949, -2.328]} scale={[100, 100.002, 100]}>
            <mesh name="Plane059_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane059_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane064" position={[19.379, 29.554, 34.456]} rotation={[-1.244, 0, 0]} scale={[100, 100, 100.002]}>
            <mesh name="Plane064_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane064_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane045" position={[19.339, 24.19, 32.205]} rotation={[2.01, 0, -Math.PI]} scale={[100, 100, 100.002]}>
            <mesh name="Plane045_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane045_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder055" position={[50.292, 42.387, 8.555]} rotation={[3.142, 0.08, -3.142]} scale={[100, 100.003, 100]}>
            <mesh name="Cylinder055_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder055_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane048" position={[37.528, 49.03, 14.224]} rotation={[-0.183, -0.054, -0.491]} scale={[100.001, 100.001, 100]}>
            <mesh name="Plane048_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane048_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane049" position={[47.754, 47.983, 8.271]} rotation={[-1.499, 0.731, -1.678]} scale={[100, 100.001, 100.001]}>
            <mesh name="Plane049_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane049_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane050" position={[31.706, 46.013, 6.266]} rotation={[1.548, -0.494, 1.687]} scale={[89.636, 89.637, 89.637]}>
            <mesh name="Plane050_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane050_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder063" position={[47.198, 42.043, -25.356]} rotation={[3.142, -0.452, -3.142]} scale={[99.999, 100.003, 100]}>
            <mesh name="Cylinder063_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder063_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane058" position={[39.076, 48.685, -13.994]} rotation={[-0.205, 0.469, -0.388]} scale={[140.142, 140.143, 140.142]}>
            <mesh name="Plane058_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane058_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane060" position={[30.021, 45.668, -17.899]} rotation={[1.285, -0.41, 1.101]} scale={[89.636, 89.637, 89.637]}>
            <mesh name="Plane060_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane060_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder065" position={[19.402, 45.065, 27.871]} rotation={[3.141, 1.539, -3.141]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder065_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder065_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder074" position={[17.54, 49.21, 21.901]} rotation={[-2.395, -0.239, 0.372]} scale={[100, 100.001, 100.001]}>
            <mesh name="Cylinder074_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder074_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve006" position={[37.899, 52.959, 3.459]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.003]}>
            <mesh name="BezierCurve006_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve006_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve007" position={[37.544, 50.667, 6.197]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.003]}>
            <mesh name="BezierCurve007_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve007_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve008" position={[35.102, 52.839, 10.533]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.003]}>
            <mesh name="BezierCurve008_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve008_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve009" position={[35.32, 51.779, -23.213]} rotation={[-1.571, 0, 0.521]} scale={[99.999, 100, 100.003]}>
            <mesh name="BezierCurve009_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve009_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve010" position={[34.76, 49.669, -20.504]} rotation={[-1.571, 0, 0.521]} scale={[99.999, 100, 100.003]}>
            <mesh name="BezierCurve010_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve010_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve011" position={[36.047, 51.208, -16.038]} rotation={[-1.571, 0, 0.521]} scale={[99.999, 100, 100.003]}>
            <mesh name="BezierCurve011_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve011_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane065" position={[45.118, 47.527, -24.277]} rotation={[-1.951, 0.644, -0.983]} scale={[100, 100.001, 100.001]}>
            <mesh name="Plane065_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane065_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube133" position={[-20.293, 38.327, 29.88]} rotation={[3.119, 0, 1.571]} scale={[100.002, 100, 100]}>
            <mesh name="Cube133_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube133_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube134" position={[-20.365, 25.569, 37.56]} rotation={[2.065, 0, Math.PI / 2]} scale={[84.368, 84.366, 84.369]}>
            <mesh name="Cube134_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube134_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube135" position={[-20.365, 30.221, 26.866]} rotation={[1.599, 0, 1.571]} scale={[100, 100, 100.002]}>
            <mesh name="Cube135_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube135_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane068" position={[-20.954, 16.422, 47.454]} rotation={[-0.022, 0, 0]} scale={[100, 100.002, 100]}>
            <mesh name="Plane068_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane068_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder084" position={[-51.707, 26.203, 8.554]} rotation={[3.142, 0.08, -3.142]} scale={[99.999, 100.003, 100]}>
            <mesh name="Cylinder084_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder084_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder085" position={[-48.568, 25.858, -25.522]} rotation={[3.142, -0.452, -3.142]} scale={[99.999, 100.003, 100]}>
            <mesh name="Cylinder085_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder085_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder086" position={[-20.488, 21.324, 47.268]} rotation={[-3.141, 1.539, 3.141]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder086_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder086_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder087" position={[-20.488, 27.982, 25.14]} rotation={[-3.142, 1.539, 3.142]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder087_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder087_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane069" position={[-50.81, 18.809, 8.178]} rotation={[1.416, 1.087, -1.39]} scale={[100, 100.002, 100]}>
            <mesh name="Plane069_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane069_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder088" position={[-22.913, 36.032, 26.243]} rotation={[-1.459, 0.058, -0.004]} scale={[100, 100, 100.002]}>
            <mesh name="Cylinder088_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder088_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder089" position={[-18.252, 36.19, 26.243]} rotation={[-1.459, -0.109, 0.015]} scale={[100, 100, 100.002]}>
            <mesh name="Cylinder089_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder089_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane070" position={[-48.147, 19.053, -25.212]} rotation={[2.233, 0.949, -2.328]} scale={[100, 100.002, 100]}>
            <mesh name="Plane070_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane070_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane071" position={[-20.954, 29.554, 34.455]} rotation={[-1.244, 0, 0]} scale={[99.999, 100, 100.003]}>
            <mesh name="Plane071_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane071_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane072" position={[-20.914, 24.19, 32.205]} rotation={[2.01, 0, Math.PI]} scale={[99.999, 100, 100.003]}>
            <mesh name="Plane072_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane072_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder090" position={[-51.378, 42.389, 8.554]} rotation={[3.142, 0.08, -3.142]} scale={[100, 100.003, 100]}>
            <mesh name="Cylinder090_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder090_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane073" position={[38.589, 48.926, 0.915]} rotation={[-0.183, -0.054, -0.491]} scale={[100.001, 100.001, 100]}>
            <mesh name="Plane073_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane073_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane074" position={[-39.103, 49.03, 14.224]} rotation={[-0.183, -0.054, -0.491]} scale={[100, 100.002, 100]}>
            <mesh name="Plane074_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane074_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane075" position={[-40.163, 48.927, 0.915]} rotation={[-0.183, -0.054, -0.491]} scale={[100, 100.002, 100]}>
            <mesh name="Plane075_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane075_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane076" position={[-49.329, 47.984, 8.271]} rotation={[-1.499, 0.731, -1.678]} scale={[100, 100, 100.002]}>
            <mesh name="Plane076_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane076_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane077" position={[-33.28, 46.014, 6.266]} rotation={[1.548, -0.494, 1.687]} scale={[89.636, 89.636, 89.638]}>
            <mesh name="Plane077_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane077_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder091" position={[-48.285, 42.044, -25.356]} rotation={[3.142, -0.452, -3.142]} scale={[99.999, 100.003, 99.999]}>
            <mesh name="Cylinder091_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder091_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane078" position={[33.238, 48.582, -26.002]} rotation={[-0.205, 0.469, -0.388]} scale={[140.142, 140.143, 140.142]}>
            <mesh name="Plane078_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane078_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane079" position={[-40.651, 48.686, -13.994]} rotation={[-0.205, 0.469, -0.388]} scale={[140.142, 140.145, 140.141]}>
            <mesh name="Plane079_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane079_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane080" position={[-34.812, 48.583, -26.002]} rotation={[-0.205, 0.469, -0.388]} scale={[140.142, 140.145, 140.141]}>
            <mesh name="Plane080_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane080_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane081" position={[-31.596, 45.669, -17.899]} rotation={[1.285, -0.41, 1.101]} scale={[89.636, 89.636, 89.638]}>
            <mesh name="Plane081_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane081_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder092" position={[-20.488, 45.065, 27.871]} rotation={[-3.142, 1.539, 3.142]} scale={[100, 100.002, 100]}>
            <mesh name="Cylinder092_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder092_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cylinder093" position={[-18.627, 49.211, 21.901]} rotation={[-2.395, -0.239, 0.372]} scale={[100, 100.001, 100.001]}>
            <mesh name="Cylinder093_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cylinder093_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve012" position={[-39.473, 52.96, 3.459]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.003]}>
            <mesh name="BezierCurve012_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve012_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve013" position={[-39.118, 50.668, 6.197]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.003]}>
            <mesh name="BezierCurve013_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve013_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve014" position={[-36.677, 52.84, 10.533]} rotation={[-1.571, 0, 0]} scale={[100, 100, 100.003]}>
            <mesh name="BezierCurve014_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve014_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve015" position={[-36.895, 51.78, -23.213]} rotation={[-1.571, 0, 0.521]} scale={[99.999, 99.999, 100.003]}>
            <mesh name="BezierCurve015_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve015_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve016" position={[-36.335, 49.67, -20.505]} rotation={[-1.571, 0, 0.521]} scale={[99.999, 99.999, 100.003]}>
            <mesh name="BezierCurve016_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve016_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="BezierCurve017" position={[-37.622, 51.209, -16.038]} rotation={[-1.571, 0, 0.521]} scale={[99.999, 99.999, 100.003]}>
            <mesh name="BezierCurve017_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.BezierCurve017_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane082" position={[-46.692, 47.528, -24.277]} rotation={[-1.951, 0.644, -0.983]} scale={[99.999, 100.001, 100.002]}>
            <mesh name="Plane082_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane082_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube113" position={[-51.172, 34.022, -26.284]} rotation={[-0.055, -1.118, -1.612]} scale={[100.002, 100, 100]}>
            <mesh name="Cube113_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube113_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube114" position={[-54.439, 34.367, 8.846]} rotation={[-2.851, -1.488, 1.869]} scale={[100.002, 100, 100]}>
            <mesh name="Cube114_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube114_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane013" position={[9.04, 98.155, -11.31]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane013_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane013_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane051" position={[10.902, 113.885, 5.014]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane051_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane051_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane052" position={[5.3, 96.483, -7.697]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane052_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane052_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane053" position={[5.037, 112.746, -40.615]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane053_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane053_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane054" position={[6.972, 162.974, 12.062]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane054_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane054_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane055" position={[2.312, 156.073, -13.707]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane055_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane055_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube101" position={[11.16, 89.82, -3.903]} rotation={[-2.544, 1.417, -2.627]} scale={[100.002, 100.001, 99.999]}>
            <mesh name="Cube101_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube101_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube102" position={[6.338, 87.446, -10.582]} rotation={[2.296, -1.549, -1.971]} scale={[100.002, 100.001, 99.999]}>
            <mesh name="Cube102_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube102_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Sphere020" position={[6.016, 81.684, -7.592]} rotation={[-2.668, 0.281, 1.536]} scale={100}>
            <mesh name="Sphere020_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Sphere020_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Sphere021" position={[12.215, 82.708, -0.357]} rotation={[-2.17, 0.554, 1.108]} scale={100}>
            <mesh name="Sphere021_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Sphere021_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane083" position={[9.758, 112.044, -0.778]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane083_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane083_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane084" position={[6.296, 118.873, -13.652]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane084_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane084_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane089" position={[5.405, 102.98, -24.653]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane089_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane089_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane090" position={[1.933, 133.179, -33.267]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane090_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane090_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane091" position={[2.707, 135.916, -53.138]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane091_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane091_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane098" position={[4.342, 170.592, 3.477]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane098_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane098_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane099" position={[7.45, 140.157, 2.624]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane099_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane099_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Sphere033" position={[-7.101, 81.684, -7.592]} rotation={[-2.668, 0.281, 1.536]} scale={100}>
            <mesh name="Sphere033_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Sphere033_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Sphere034" position={[-13.3, 82.708, -0.357]} rotation={[-2.17, 0.554, 1.108]} scale={100}>
            <mesh name="Sphere034_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Sphere034_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane085" position={[6.972, 162.974, 12.062]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane085_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane085_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane086" position={[2.312, 156.073, -13.707]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane086_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane086_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane087" position={[4.342, 170.592, 3.477]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane087_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane087_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane088" position={[5.037, 112.746, -40.615]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane088_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane088_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane092" position={[5.405, 102.98, -24.653]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane092_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane092_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane093" position={[1.933, 133.179, -33.267]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 99.999]}>
            <mesh name="Plane093_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane093_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane103" position={[2.312, 156.073, -13.707]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane103_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane103_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane095" position={[10.902, 113.885, 5.014]} rotation={[0.474, -1.34, 0.697]} scale={[100, 100.003, 99.999]}>
            <mesh name="Plane095_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane095_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane101" position={[2.707, 135.916, -53.138]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 100]}>
            <mesh name="Plane101_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane101_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube136" position={[6.338, 87.446, -10.582]} rotation={[2.295, -1.549, -1.971]} scale={[100.002, 100.001, 99.999]}>
            <mesh name="Cube136_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube136_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Plane096" position={[5.037, 112.746, -40.615]} rotation={[-1.162, 1.428, 0.726]} scale={[100, 100.002, 100]}>
            <mesh name="Plane096_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Plane096_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Cube137" position={[11.16, 89.82, -3.903]} rotation={[-2.544, 1.417, -2.627]} scale={[100.002, 100.001, 99.999]}>
            <mesh name="Cube137_TT_checker_4096x4096_UV_GRID_0" geometry={nodes.Cube137_TT_checker_4096x4096_UV_GRID_0.geometry} material={materials.TT_checker_4096x4096_UV_GRID} />
          </group>
          <group name="Empty010" position={[-0.912, 20.21, 46.953]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/beetle-transformed.glb')
