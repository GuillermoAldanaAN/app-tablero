import { Box, Card, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import Pagination from "../Pagination";
import { useState } from "react";

const TablaCustom = () => {
    const { posts } = useSelector((state) => state.post);
    const [currentPage, setCurrentPage] = useState(1); //valor inicial

    const itemsPerPage = 5; //cantidad elementos
    const totalPages = Math.ceil(posts.length / itemsPerPage); //total de paginas / longitud
    const startIndex = (currentPage - 1) * itemsPerPage; // pagina inicial en indice 0
    const endIndex = startIndex + itemsPerPage; //pagina final
    const currentData = posts.slice(startIndex, endIndex); //recorto el array en porciones

    const onPageChange = (page) => {
        setCurrentPage(page); //asigno nueva pagina
    };

    return (
        <>
            <Card>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Title</Th>
                                <Th>Body</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {currentData.map(element => {
                                return (
                                    <Tr key={element.id}>
                                        <Td>{element.id}</Td>
                                        <Td>{element.title}</Td>
                                        <Td >{element.title}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>

                </TableContainer>
            </Card>
            <Box mt={3}>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            </Box>
        </>
    )
}
export default TablaCustom;