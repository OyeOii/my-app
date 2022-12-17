import { useGLTF } from '@react-three/drei'

export default function ProjectSign()
{
    const ProjectSign = useGLTF('./project.glb')
    

    return <primitive 
        object={ ProjectSign.scene }
        scale={ 3 }
        position={ [ 1.4, 1.2, 0.8 ] }
        rotation-y={ 0.04 }
        onClick = { ( event ) => 
            {
                console.log(event.eventObject)
            
            }
        }
    />
}