import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';
import MainPage from './MainPage';
import ProductDetails from './ProductDetails';

function App() {

  return (
    <div>
    <Home/>
    <Router>
      <Routes>
      <Route path="/MainPage" element ={<MainPage/>}/>
      <Route path="/" element ={<ProductPage/>}/>
      {/* <Route path="/MainPage" element ={<MainPage/>}/> */}
      <Route path="/ProductDetails" element ={<ProductDetails/>}/>
    
      
    </Routes>
     </Router>
     </div>
  );
}

export default App;

