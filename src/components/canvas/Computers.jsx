import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'; 

const Computers = ( { isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf'); 

  return (
    <mesh>
      <hemisphereLight intensity={0.75} 
      groundColor="black" /> 
      <pointLight intensity={1} /> 
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow
        shadow-mapSize={1024}
      /> 
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.7 : 0.70}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} 
      /> 
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); // Create a media query to check if the screen width is 500px or less

    setIsMobile(mediaQuery.matches); // Set the initial value of isMobile based on the media query result

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); // Update isMobile state when the media query result changes
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange); // Add an event listener to handle changes in the media query result

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); // Clean up the event listener when the component unmounts
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100vh' }} //
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;