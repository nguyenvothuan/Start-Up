import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './pages/signin';
import Home from './pages'
import NavBar from './components/Navbar';
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
