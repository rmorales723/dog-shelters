import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dogs from "./components/Dogs";
import Shelters from "./components/Shelters";
import FormContainer from "./components/FormContainer"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/dogs" component={Dogs}/>
        <Route exact path="/shelters" component={Shelters}/>
        <Route exact path="/dogs/new" component={FormContainer}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
