import { useGLTF } from '@react-three/drei'
// import React, { Component } from 'react'


export default function Aboutme()
{
    const Aboutme = useGLTF('./aboutmeintro.glb')
    

    return <primitive 
    object={ Aboutme.scene }
    scale={ 3 }
    position={ [ 2.2, 1.2, 0.7 ] }
    rotation-y={ 0.12 }
    onClick = { ( event ) => 
        {
            console.log(event.eventObject)
        
        }
    }
/>
}