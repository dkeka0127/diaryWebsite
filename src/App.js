import './App.css';
import {Route} from 'react-router-dom';

import Login from './component/Login';
import SignUp from './component/SignUp';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <Route exact path='/main' component = { Login } />
      <Route exact path='/main/signup' component = { SignUp } />
      <Route exact path='/main/diary' component = { Main } />
    </div>
  );
}

export default App;
