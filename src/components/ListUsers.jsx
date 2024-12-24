import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const ListUsers = () => {

    const users = useSelector((state) => state.data)

    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            const response = await axios("https://jsonplaceholder.typicode.com/users");
            console.log("Datos de la API:", response.data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {

        fetchData();

    }, [dispatch])


    return (
        <>
            <h2>
                Lista de Users de placeholders
            </h2>
            <ul>
                <li>Usuario</li>
            </ul>
        </>
    )
}
