import { useGLTF } from '@react-three/drei'
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default function Model()
{
    const model = useGLTF('./oyeoiiisland.glb')

    return <>

            <primitive 
                object = { model.scene } 
                scale = { 3 } 
                position-y = { 1 } 
                position-x = { 1 } 
                position-z = { 1 } 
            >
               
            </primitive>
        
        

        </>

}

useGLTF.preload('./oyeoiiisland.glb')