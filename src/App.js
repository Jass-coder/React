import './App.css';
import Form from './components/form';
import { Fragment,useState } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Froms from './components/forms';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Logout from './components/logout';

function App() {

  const [auth,setAuth] = useState(false)
  if(localStorage.getItem('auth') === 'true' && auth === false){
    setAuth(true);
  }
  
  return <BrowserRouter>
    <Switch>
      <Fragment>
        <Navbar auth={auth}/>
        <Route exact path='/logout' component={ () => <Logout setAuth={setAuth} /> } />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Froms}/>
        <Route exact path="/login" component={ () => <Form setAuth={setAuth} auth={auth} /> } />
        <Route exact path="/about" component={About}/>
      </Fragment>
    </Switch>
  </BrowserRouter>
}

export default App;
