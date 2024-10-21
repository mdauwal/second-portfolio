// src/components/Model.jsx
import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
  const { scene, animations } = useGLTF('/models/scene.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  useFrame(() => {
    scene.rotation.y += 0.01; // Rotate the model slightly
  });

  return (
    <primitive
      object={scene}
      scale={[1.2, 1.2, 1.2]} // Scale the model down to fit better
      position={[1.5, -1, 0]} // Move the model to the right and slightly down
    />
  );
};

export default Model;
