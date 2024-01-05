import React, { useState } from 'react'
import { Button,  Text } from 'react-native'

  
export default function FuntionalComponent() {
    const [counter,setCounter] = useState(0);
    return (
        <>

            <Text >This is a Functional Component</Text>
            <Button title=' + ' onPress={()=> setCounter(counter+1)}></Button>
            <Text>{counter}</Text>
            
            <Button title=' - ' onPress={()=> setCounter(counter-1)}></Button>

        </>

    )
}
 