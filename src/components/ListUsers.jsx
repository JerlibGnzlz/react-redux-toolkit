import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";

export const ListUsers = () => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();


    const fetchData = async () => {

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")

            dispatch(fetchUsers(response.data))
        } catch (error) {
            console.log("Error al obtener los datos", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [dispatch]);

    return (
        <>
            <h2>Lista de Usuario de placeholders</h2>
            {users.length === 0 ? (
                <p>Cargando Usuarios...</p>
            ) : (
                <ul style={{ listStyleType: 'none' }}>
                    {users?.map((user) => (
                        <li
                            key={user.id}>{user.name}</li>
                    ))}
                </ul >
            )}
        </>
    );
};
