import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/productsSlice"

export const ListProducts = () => {

    const products = useSelector((state) => state.products)

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
                <input type="text" />
                <button>Agregar producto</button>
            </aside>
        </>
    );

}

