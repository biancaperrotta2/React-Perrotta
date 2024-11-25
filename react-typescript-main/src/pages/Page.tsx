import { useState } from "react";
import { FormProduct } from "../components/AppComponents/FormProduct"
import { Header } from "../components/AppComponents/Header"
import { ListProduct } from "../components/AppComponents/ListProduct";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

export const Page = () => {

  const [products, setProducts] = useState<ItemProduct[]>([])

  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem])
  }

  return (
    <div>
      <Header />
      <h2 className='text-center'>Formulario</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2 className='text-center'>Productos</h2>
      {
        products.length > 0 ? (
          <ListProduct arrItems={products} />
        ) : (
          <h4 className='text-center'>No hay productos</h4>
        )
      }
    </div>
  )
}
