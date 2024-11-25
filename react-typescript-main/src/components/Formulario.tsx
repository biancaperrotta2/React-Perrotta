import { useForm } from "./hooks/useForm"

export const Formulario = () => {
    const {values, handleChange, resetForm} = useForm({
        email: '',
        nombre: '',
        edad: 0
    })
    const {email, nombre, edad} = values;

    const handleSubmitForm = () =>{
        alert("Formulario enviado")
        console.log(values)
        resetForm()
    }

    return (
        <div style={{width:"60%", border:'3px solid Red', padding:'20px'}}>
            <div>
                <h2>Formulario</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", gap: '2vh' }}>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" placeholder="Nombre" />
                <input value={email} name="email" type="email" onChange={handleChange}  placeholder="Email" />
                <input value={edad} name="edad" type="number" onChange={handleChange}  placeholder="Edad" />
            </div>
            <div>
                <button onClick={handleSubmitForm}>Enviar</button>
            </div>
        </div>
    )
}
