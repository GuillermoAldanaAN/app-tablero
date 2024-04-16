import { Box } from "@chakra-ui/react";
import Tablero from "../components/Tablero";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from "../store/user/userSlice";

const PresentacionPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => response.json())
            .then((data) => dispatch(addUser(data)))
            .catch((error) => console.log(error))

    }, [dispatch]);

    return (
        <Box display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh">
            <Tablero />
        </Box>
    )
}

export default PresentacionPage;