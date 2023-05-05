import React, { useEffect } from 'react'
import Tablero from './components/Tablero'
import { Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addUser } from './store/user/userSlice';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error))

  }, []);

  return (
    <React.Fragment>
        <Box display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh">
          <Tablero />
        </Box>

    </React.Fragment>
  )
}

export default App
