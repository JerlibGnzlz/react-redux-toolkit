import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";

export const ListUsers = () => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                console.log("Datos de la API:", response.data);
                dispatch(fetchUsers(response.data));
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <h2>Lista de Usuario de placeholders</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};
