import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

import mappng from '../assets/map-earth.png';

const Globe = () => {
  const globeMaterial = new THREE.MeshStandardMaterial({
    // map: new THREE.TextureLoader().load(mappng), // Replace with a texture URL
    // map: new THREE.TextureLoader().load("https://unpkg.com/three-globe@2.41.12/example/img/earth-night.jpg"), // Replace with a texture URL
    // bumpMap: new THREE.TextureLoader().load("https://unpkg.com/three-globe/example/img/earth-topographic.jpg"), // Optional for terrain effect
    map: new THREE.TextureLoader().load("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"), // Replace with a texture URL
    bumpMap: new THREE.TextureLoader().load("//unpkg.com/three-globe/example/img/earth-topology.png"), // Optional for terrain effect
    bumpScale: 0.05,
    // color: "blue", 
    emissive: "#1b4f72", 
    emissiveIntensity: 0.2, 
    roughness: 0.5, 
    metalness: 0.3, 
  });

  

  return (
    <Canvas camera={{ position: [3, 3, 5], fov: 75 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Globe */}
      <Sphere args={[3, 96, 96]} material={globeMaterial} />

      {/* Background Stars */}
      <Stars radius={300} depth={50} count={5000} factor={7} fade />

      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default Globe;
