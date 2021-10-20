import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InitializeFirebase from './Firebase/Firebase.init';

import Header from './Components/Header/Header';
import Home from './Components/HomeComp/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/NotFound/Notfound';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Authprovider from './Context/Authprovider';
import Private from './Components/Private/Private';
import Shop from './Components/Shop/Shop';
import Blogs from './Components/Blogs/Blogs';




InitializeFirebase();

function App() {

  
  return (
    <div className="App">
      <Authprovider>
        <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/Service">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
            </Route>
            <Private path="/shop">
              <Shop></Shop>
            </Private>
            <Private path="/blogs">
              <Blogs></Blogs>
            </Private>
          <Route path="*">
              <Notfound></Notfound>
          </Route>
        </Switch>
          <Footer></Footer>
        </Router>
      </Authprovider>
        
      
      

    </div>
  );
}

export default App;
