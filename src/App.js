import './App.css';
import HOME from './component/HOME';
import Navbar from './component/Navbar';
import product from './component/product';
import Products from './component/Products';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
        <Navbar/>
        <Switch>
        <Route exact path="/" component={HOME} />
        <Route exact path="/Products" component={Products} />

        <Route exact path="/products/:id" component={product} />

      </Switch>

  
 
    </>
  );
}
export default App;