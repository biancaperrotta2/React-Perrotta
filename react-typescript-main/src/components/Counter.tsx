import { useState } from "react"

export const Counter = () => {
  const [contador, setContador] = useState<number>(0)

  return (
   <div style={{width:"60%", border:'3px solid Red', padding:'20px'}}>

      <h1>Uso de UseState</h1>

      <div style={{ display: 'flex', gap: '5px ', height: '25px', alignItems: 'center' }}>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <h2>Contador en: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
    </div>
  )
}
