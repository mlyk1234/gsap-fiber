import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import AnimatedCursor from "react-animated-cursor";
import Title from "./components/Title";
import BgLayout from "./components/BgLayout";
function App() {


  return (
    <div className="App">
      <BgLayout />
      <Landing />
      <Title />
      <Canvas>
        <pointLight intensity={2.5} position={[12, 45, 0]} />
        <pointLight intensity={3.5} position={[10, -5, 5]} />
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </Canvas>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="1, 195, 163"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
}

export default App;
