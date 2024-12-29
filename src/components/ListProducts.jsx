import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/productsSlice"

export const ListProducts = () => {

    const products = useSelector((state) => state.products?.data)

    const dispatch = useDispatch()


    useEffect(() => {
        const fectchData = async () => {
            try {
                const response = await axios.get("http://localhost:3004/product")

                if (response.data) {
                    console.log(response.data)
                    dispatch(getProducts(response.data))
                } else {
                    throw new Error("La respuesta no contiene datos")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fectchData()
    }, [dispatch])

    return (
        <>
            <h2>CRUD de productos</h2>
            <h3>Lista de productos</h3>

            <ul>
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )}
            </ul>

            <aside>
                <input type="text" />
                <button>Agregar producto</button>
            </aside>
        </>
    );

}

