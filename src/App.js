import './App.css';
import Effects from './components/Effects/Effects';
import Product from './components/Products/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
         <Product />
      </Container>
      <Effects />
      
    </div>
  );
}

export default App;
