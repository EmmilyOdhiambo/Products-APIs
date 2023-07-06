
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ProductPage from './ProductPage';
import MainPage from './MainPage';
import ProductDetails from './ProductDetails';

function App() {

  return (
    <Router>
      <Routes>
       
      <Route path="/" element ={<ProductPage/>}/>
      <Route path="/MainPage" element ={<MainPage/>}/>
      <Route path="/ProductDetails" element ={<ProductDetails/>}/>
    
      
    </Routes>
     </Router>
  );
}

export default App;

