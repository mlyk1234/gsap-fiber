import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/Project-Name.glb");

const Home = ({ ...props }) => {
    const ref = useRef();

    const { nodes, materials } = useGLTF("/Project-Name.glb");

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
        ref.current.position.y = (1 + Math.sin(t / 2)) / 10
      });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 6, 0.2, 0]} scale={0.010}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Merged_Objects.geometry}
          material={nodes.Merged_Objects.material}
          position={[-0.02, 0, 0.2]}
        />
      </group>
    </group>
  );
};

export default Home;
