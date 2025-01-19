// src/GitHubGlobe.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sphere } from '@react-three/drei';

const GitHubGlobe = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} />
      
      {/* Create a globe */}
      <Sphere args={[1, 50, 50]} position={[0, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Sphere>

      {/* Optional: add controls for rotating the globe */}
      <OrbitControls />
    </Canvas>
  );
};

export default GitHubGlobe;
