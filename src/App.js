import './App.css';
import Home from './components/products/Home';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import AddEmployee from "./components/products/AddEmployee"
import EditEmployee from "./components/products/EditEmployee"
function App() {
  return (
<Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employee/add" component={AddEmployee} />
          <Route exact path="/employee/edit/:id" component={EditEmployee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
