import { useEffect, useState } from "react"

export const UseEffect = () => {

    const [estado, setEstado] = useState<boolean>(false)

    useEffect(() => {
        console.log("Montada del componente")
    }, [])

    
    useEffect(() => {
        console.log("Estado en valor: ", estado)
    }, [estado])

    return (
        <div style={{width:"60%", border:'3px solid Red', padding:'20px'}}>
            <h1>Uso de UseEffect</h1>
            <p>Estado en valor: {estado ? "Verdadero" : "Falso"}</p>
            <button onClick={() => setEstado(!estado)}>Cambiar Estado</button>
        </div>
    )
}
