import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import { useControls } from 'leva'
import Camera from './CameraControl.js'
import Placeholder from './Placeholder.js'
import Model from './model.js'
import Linda from './Linda.js'
import Aboutme from './aboutme.js'
import Credit from './computer.js'
import Blog from './Blog.js'
import SignAboutme from './AboutmeT.js'
import CreditSign from './Credit.js'
import ProjectSign from './Project.js'



export default function Experience()
{
    debug
    const { position } = useControls({
        position:
        {
            value: { x:-2, y:0, z:0 },
            step: 0.01
        }
    })

    return <>
        <Camera />
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 3, 2, 5 ] } intensity={ 2 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 0.3 } />

        <Suspense
            fallback = { <Placeholder position-x = { 1 } scale = { [1, 1, 1]} /> } >
            <Model scale = { 1 } onClick = {EventTarget} position = { [ position.x, position.y, 0 ] } />
        </Suspense>

        <Linda />
        <Aboutme />
        <Credit />
        <Blog />
        <SignAboutme />
        <CreditSign />
        <ProjectSign />
        


    </>
}