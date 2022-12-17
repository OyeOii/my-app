import { useGLTF } from '@react-three/drei'

export default function Blog()
{
    const Blog = useGLTF('./blog.glb')
    

    return <primitive 
        object={ Blog.scene }
        scale={ 3 }
        position={ [ 2.1, 1, 0.7 ] }
        rotation-y={ 0.12 }
        onClick = { ( event ) => 
            {
                console.log(event.eventObject)
            
            }
        }
    />
}