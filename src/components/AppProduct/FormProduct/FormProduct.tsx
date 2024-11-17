import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct {
    handleAddProduct: Function;
}

export const FormProduct :FC<IPropsFormProduct> = ({ handleAddProduct }) => {
    const {values, handleChange, resetForm} = useForm({nombre: '', imagen: '', precio: 0});
    const handleSubmitForm = () => {
        handleAddProduct(values);
        resetForm();
    }
    return (
    <Form className="p-4 border rounded shadow-sm bg-light">
    <Form.Group controlId="formNombre" className="mb-3">
        <Form.Label className="fw-bold">Nombre</Form.Label>
        <Form.Control 
            type="text" 
            name="nombre" 
            placeholder="Ingrese el nombre del producto" 
            value={values.nombre} 
            onChange={handleChange} 
            className="form-control"
        />
    </Form.Group>
    <Form.Group controlId="formImagen" className="mb-3">
        <Form.Label className="fw-bold">Imagen</Form.Label>
        <Form.Control 
            type="text" 
            name="imagen" 
            placeholder="Ingrese la URL de la imagen del producto" 
            value={values.imagen} 
            onChange={handleChange} 
            className="form-control"
        />
    </Form.Group>
    <Form.Group controlId="formPrecio" className="mb-3">
        <Form.Label className="fw-bold">Precio</Form.Label>
        <Form.Control 
            type="number" 
            name="precio" 
            placeholder="Ingrese el precio del producto" 
            value={values.precio} 
            onChange={handleChange} 
            className="form-control"
        />
    </Form.Group>
    <div className="text-center mt-4">
        <Button onClick={handleSubmitForm} variant="primary" className="px-4">
            Enviar Producto
        </Button>
    </div>
</Form>

  )
}


