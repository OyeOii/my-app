import { useGLTF } from '@react-three/drei'


export default function Linda()
{
    const Linda = useGLTF('./Cat/cute_chubby_cat.glb')
   
   
    return <>
            
            <primitive 
                object = { Linda.scene }
                scale = { 0.02 }
                position = { [ -1, 1.5, -2.8 ] }
                rotation-y = { 1.8 }

                onClick = { ( event ) => 
                {
                    console.log(event.eventObject)
                
                }
            }
                
            />
        
        

        </>
    

    
}