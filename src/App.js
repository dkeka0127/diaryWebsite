import './App.css';
import {Route} from 'react-router-dom';

import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Main from './component/Main/Main';

function App() {
  return (
    <div className="App">
      <Route exact path='/main/login' component = { Login } />
      <Route exact path='/main/signup' component = { SignUp } />
      <Route exact path='/main/diary' component = { Main } />
    </div>
  );
}

export default App;
