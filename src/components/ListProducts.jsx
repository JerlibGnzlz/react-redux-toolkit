import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProduct, deleteProduct, getProducts, updateProduct } from "../redux/productsSlice"

export const ListProducts = () => {

    const products = useSelector((state) => state.products)
    const [newProductName, setNewProductName] = useState("")
    const [editProduct, setEditProduct] = useState(null)
    const [editName, setEditName] = useState("")

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

            const newProduct = { name: newProductName, id: Date.now() };

            try {
                const response = await axios.post("http://localhost:3004/products", newProduct)

                dispatch(createProduct(response.data))
                setNewProductName("")
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Debe agregar productos")
        }
    }

    const handleUpdateProduct = async () => {
        if (editProduct && editName) {
            try {
                const response = await axios.put(`http://localhost:3004/products/${editProduct.id}`, { name: editName })
                dispatch(updateProduct(response.data))
                setEditProduct(null)
                setEditName("")
            } catch (error) {
                console.log(error)
            }
        }
    }


    const handleDeleteProduct = async (id) => {
        try {
            dispatch(deleteProduct(id))
            axios.delete(`http://localhost:3004/products/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>CRUD de productos</h2>
            <h3>Lista de productos</h3>

            <ul style={{ listStyleType: 'none' }}>


                {products.data.length === 0 ? <li>No hay productos</li> :
                    products.data.map((product) => (
                        <li key={product.id}>
                            {editProduct?.id === product.id ? (
                                <div>
                                    <input type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    />
                                    <button onClick={handleUpdateProduct}>Actualizar</button>
                                    <button onClick={() => setEditProduct(null)}>Cancelar</button>
                                </div>)
                                :
                                (<div>
                                    <span style={{ margin: '10px' }}>{product.name}:</span>
                                    <button
                                        onClick={() => {
                                            setEditProduct(product)
                                            setEditName(product.name)
                                        }}
                                    >
                                        Editar
                                    </button>

                                    <button onClick={() => handleDeleteProduct(product.id)}
                                        style={{ margin: '5px' }} >Eliminar
                                    </button>
                                </div>
                                )}
                        </li >
                    ))}
            </ul >

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