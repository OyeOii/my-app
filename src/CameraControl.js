import { useFrame } from "@react-three/fiber"
import state from '../state.js.js'
import * as THREE from 'THREE'

const CameraControl = ({ }) => {
    const vec = new THREE.Vector3()
    useFrame(({ camera, scene }) => {
        if (state.shouldUpdate) {
            camera.position.lerp(vec.set(state.cameraPos), 0.1)
            scene.obitControls.update()
        }
        
    })
    return (
        null
    )
}

export default CameraControl