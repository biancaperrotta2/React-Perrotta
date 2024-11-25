import { MainComponent } from "../components/MainComponent"
import { Counter } from "../components/Counter"
import { UseEffect } from "../components/UseEffect"
import { Formulario } from "../components/Formulario"


export const Trial = () => {

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:"60^"}}> 
            <MainComponent text={"Texto desde app"} color={"red"} fontSize={50} />
            <Counter />
            <UseEffect />
            <Formulario />
        </div>
    )
}
