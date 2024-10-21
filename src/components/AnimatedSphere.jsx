// src/components/AnimatedSphere.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  // Rotate the sphere continuously
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={sphereRef} scale={1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4FD1C5" wireframe />
    </mesh>
  );
};

const ThreeDCanvas = () => {
  return (
    <Canvas className="h-screen">
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeDCanvas;
