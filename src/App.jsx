import { Stats, Environment, PointerLockControls } from '@react-three/drei'
import React from 'react';
import { Canvas } from '@react-three/fiber'
import Overlay from './Overlay'
import Crosshair from './Crosshair';
import {Sphere, Sphere2} from './Spheres';
import {Room} from './Room';


export default function App() {

  return (
    <>
      <Canvas camera={{fov: 60, near: 0.1, far: 1000, position: [0, 0, 0]}}>
        <directionalLight
          intensity={1}
          castShadow={false}
          shadow-bias={-0.00015}
          shadow-radius={4}
          shadow-blur={10}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
        />

        <Environment files="./img/rustig_koppie_puresky_1k.hdr" background />
        
        <Sphere />
        <Sphere2 />

        <Room />

        <PointerLockControls  />
        <Stats />
        
      </Canvas>

      
      <Overlay />
      <Crosshair />
    </>
  )
}
