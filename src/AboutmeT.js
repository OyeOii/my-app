import { useGLTF } from '@react-three/drei'

export default function SignAboutme()
{
    const Sign = useGLTF('./aboutmetag.glb')
    

    return <primitive 
        object={ Sign.scene }
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