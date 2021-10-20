import './styles/App.css';
import Home from './routes/home-page/Home';
import Login from './routes/login-page/Login';
import Messenger from './routes/messenger/Messenger';
import Composs from './routes/compos/Composs';
import Profile from './routes/profile-page/Profile';
import { useStateValue } from './context/stateprovider/StateProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
 const [{user}] = useStateValue();
  return (
    <Router>
      <div className="App">
        <Switch>
          {
            user ?  
            <>
            <Route exact path="/" component={Home} />
            <Route exact path="/messenger" component={Messenger} /> 
            <Route exact path="/compos" component={Composs} />
            <Route exact path="/:username" component={Profile} />
            </> :<Login />
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
