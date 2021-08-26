import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TeaxtApp from './components/TeaxtApp';
import './css/App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/messenger">
              <TeaxtApp />
          </Route>
          <Route path="/signup">
              <SignUp />
          </Route>
          <Route path="/signin">
              <SignIn />
          </Route>
          <Route path="/">
              <Redirect to="/signin"/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
