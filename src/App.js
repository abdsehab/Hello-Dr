import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InitializeFirebase from './Firebase/Firebase.init';
import useFirebase from './Hooks/useFirebase';
import Header from './Components/Header/Header';



InitializeFirebase();

function App() {

  const {GoogleSignin, user ,Logout} = useFirebase();
  return (
    <div className="App">
        
        
      <Header></Header>

    </div>
  );
}

export default App;
