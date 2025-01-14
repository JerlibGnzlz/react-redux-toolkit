import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProduct, getProducts } from "../redux/productsSlice"

export const ListProducts = () => {

    const products = useSelector((state) => state.products)
    const [newProductName, setNewProductName] = useState("")
    const [editProductName, setEditProductName] = useState(null)

    const dispatch = useDispatch()


    useEffect(() => {
        const fectchData = async () => {
            try {
                const response = await axios("http://localhost:3004/products")

                dispatch(getProducts(response.data))

            } catch (error) {
                console.log(error)
            }
        }
        fectchData()
    }, [dispatch])

    const handleCreateProduct = async () => {
        if (newProductName) {

            const nuevoProducto = { name: newProductName }

            try {
                const response = await axios.post("http://localhost:3004/products", nuevoProducto)

                dispatch(createProduct(response.data))
                setNewProductName("")
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Debe agregar productos")
        }
    }


    const handleUpdateProduct = () => {

    }


    const handleDeleteProduct = () => {

    }

    return (
        <>
            <h2>CRUD de productos</h2>
            <h3>Lista de productos</h3>

            <ul style={{ listStyleType: 'none' }}>
                {products.data.map((product) => (

                    <li
                        key={product.id}>
                        <span style={{ margin: '10px' }} >{product.name}:</span>
                        <button
                            onClick={handleCreateProduct}>Editar
                        </button>
                        <button
                            style={{ margin: '5px' }}
                            onClick={handleCreateProduct}>Eliminar
                        </button>
                    </li>
                ))}
            </ul>

            <aside>
                <input type="text"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />
                <button style={{ margin: '10px' }} onClick={handleCreateProduct}>Agregar producto</button>
            </aside>
        </>
    );

}

