import { Button, Form } from "react-bootstrap"
import { useForm } from "../hooks/useForm"
import { FC } from "react";

interface IPropsFormProduct {
  handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {

  const { handleChange, values, resetForm } = useForm({
    nombre: '',
    imagen: '',
    precio: 0
  })

  const handleSubmitForm = () => {
    handleAddProduct(values);
    resetForm();
  }

  return (
    <Form className="p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" value={values.nombre} onChange={handleChange} placeholder="Ingrese el nombre del producto" />
      </Form.Group>
      <Form.Group controlId="formNombre">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" name="imagen" value={values.imagen} onChange={handleChange} placeholder="Ingrese imagen del producto" />
      </Form.Group>
      <Form.Group controlId="formNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" name="precio" value={values.precio} onChange={handleChange} placeholder="Ingrese el  precio del producto" />
      </Form.Group>
      <div className="d-fleex justify-content-center mt-4">
          <Button variant='primary' onClick={handleSubmitForm}>Subir producto</Button>
      </div>
    </Form>
  )
}
