import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProduct, getProducts } from "../redux/productsSlice"

export const ListProducts = () => {

    const products = useSelector((state) => state.products)
    const [newProductName, setNewProductName] = useState("")

    const dispatch = useDispatch()


    useEffect(() => {
        const fectchData = async () => {
            try {
                const response = await axios("http://localhost:3004/products")

                console.log(response.data)
                dispatch(getProducts(response.data))

            } catch (error) {
                console.log(error)
            }
        }
        fectchData()
    }, [dispatch])

    const handleCreateProduct = () => {
        if (newProductName) {

            dispatch(createProduct(newProductName))

            try {
                axios.post("http://localhost:3004/products", { name: newProductName })
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
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <aside>
                <input type="text"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />
                <button onClick={handleCreateProduct}>Agregar producto</button>
            </aside>
        </>
    );

}

