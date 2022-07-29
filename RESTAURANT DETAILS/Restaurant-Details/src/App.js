
import './App.css';
import {ChakraProvider} from '@chakra-ui/react';
import Cards from './components/Card';
import Home from './components/home';
function App() {
  return (
    <ChakraProvider>
   
      <Home />
    
    </ChakraProvider>
  );
}

export default App;