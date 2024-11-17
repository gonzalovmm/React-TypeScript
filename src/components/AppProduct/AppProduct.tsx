import { useState } from "react";
import Header from "./Header/Header"
import ListProduct from "./ListProduct/ListProduct";
import { FormProduct } from "./FormProduct/FormProduct";

interface ItemProduct{
    precio: number,
    imagen: string,
    nombre: string,
}

const AppProduct = () => {
    const [products, setProducts] = useState<ItemProduct[]>([]);
    console.log(products);

    const handleAddProduct = (newItem: ItemProduct) => {
        setProducts((prev) => [...prev, newItem]);
    }
  return (
    <div className="bg-light p-3 rounded shadow">
        <Header/>
        <h2 className="text-center"> Formulario </h2>
        <FormProduct handleAddProduct={handleAddProduct} />
        <h2 className="text-center"> Productos </h2>
        {
          products.length > 0 ? <ListProduct arraItems={products}/> : <h3 className="text-center">No hay productos</h3>
        }
        
      
    </div>
  )
}

export default AppProduct
