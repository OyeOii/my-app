import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import { CubeCamera } from '@react-three/drei';

function Sphere() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(
      window.innerWidth,
      window.innerHeight
  );
  document.body.innerHTML = '';
  document.body.appendChild( renderer.domElement );

  return(
      <mesh visible position = {[ 0, 0, 0 ]} rotation = {[ 0, 0, 0 ]} castShadow>
          <directionalLight intensity={ 0.2 } />
          <shpereGeometry attach = " geometry " args = {[ 2, 32, 32 ]} />
          <meshBasicMaterial
          attach = "material"
          envMap = { CubeCamera.renderTarget.texture}
          color = ""
          roughness = { 0.1 }
          metalness = { 1 } />
      </mesh>
  )
}

const root = ReactDOM.creat(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Canvas
        shadows
        camera={ {
        fov: 50,
        near: 1,
        far: 100,
        position: [ 14, 7, 1 ]
        
    } }
>
    
    <Experience />
</Canvas>

    </React.StrictMode>
)