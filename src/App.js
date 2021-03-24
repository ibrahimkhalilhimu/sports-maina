import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './components/Details/Details';
function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/home">
          <Home></Home>
          </Route>
        <Route path="/details/:idTeam">
          <Details></Details>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
         
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
