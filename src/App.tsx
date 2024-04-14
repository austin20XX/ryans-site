import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routing/Router'
import { Container } from '@mui/material';


function App() {
  return (
    <Container className="App" disableGutters maxWidth='xl'>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
