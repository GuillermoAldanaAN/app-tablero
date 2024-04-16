import { Flex, Link } from "@chakra-ui/react";

export function NavBar() {
    return (
        <Flex
        as="nav"
        justify="flex-end"
        bg="gray.100"
        p="2"
        boxShadow="sm"
        position="fixed"
        top="8"
        right="8"
        zIndex="10" // Asegura que el menú esté en el frente
        borderRadius="md"
        >
            <Link
                color="blue.500"
                fontWeight="bold"
                textDecoration="none"
                px="3"
                py="1"
                borderRadius="md"
                _hover={{ bg: "blue.100" }}
                mr="2"
                href="/"
            >
                Presentación
            </Link>
            <Link
                color="blue.500"
                fontWeight="bold"
                textDecoration="none"
                px="3"
                py="1"
                borderRadius="md"
                _hover={{ bg: "blue.100" }}
                mr="2"
                href="/listado"
            >
                Listado
            </Link>
        </Flex>

    );
}
