import React from "react";
import { Card, CardHeader, CardBody, Heading, Text, CardFooter, Tag, HStack, TagLabel, FormLabel, FormControl } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import InputEmail from "../Inputs";
const Tablero = () => {

    const user = useSelector((state) => state.user);
    return (
        <React.Fragment>
            <Card width={'450px'}>
                <CardHeader>
                    <Heading size='md'>Información de usuario</Heading>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <FormLabel>Nombre</FormLabel>
                        <Text>{user.name}</Text>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Usuario</FormLabel>
                        <Text>{user.username}</Text>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Text>{user.email}</Text>
                    </FormControl>
                    <HStack spacing={3} mt={4}>
                        <Tag size={'md'} key={'md'} variant='subtle' colorScheme='green'>
                            <TagLabel>Activo</TagLabel>
                        </Tag>
                    </HStack>
                </CardBody>
                <CardFooter>
                    <InputEmail />
                </CardFooter>
            </Card>
        </React.Fragment>
    );
}

export default Tablero;