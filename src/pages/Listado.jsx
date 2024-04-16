import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TablaCustom from "../components/Tabla";
import { addPost } from "../store/post/postSlice";
import { Box } from "@chakra-ui/react";

const ListadoPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => dispatch(addPost(data)))
            .catch((error) => console.log(error))

    }, [dispatch]);

    return (
        <Box
            p={20}
            mt={5}
        >
            <TablaCustom />
        </Box>
    )
}
export default ListadoPage