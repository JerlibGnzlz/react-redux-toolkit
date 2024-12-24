import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";

export const ListUsers = () => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data)
                dispatch(fetchUsers(res.data));
            })
            .catch((error) => {
                console.log(error)
            })


    }, [dispatch]);

    return (
        <>
            <h2>Lista de Usuario de placeholders</h2>
            {users.length === 0 ? (
                <p>Cargando Usuarios...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </>
    );
};
