import { useEffect, useState } from "react"

const ComponentUseEffect = () => {

    const [state, setState]=useState(false);

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        }
    }, [])
    useEffect(() => {
        console.log('State changed');
    }, [state])
  return (
    <div>
        <p>{state ? "true" : "false"}</p>
      <button onClick={()=>setState(!state)}>Cambiar estado</button>
    </div>
  )
}

export default ComponentUseEffect
