import './styles/App.scss';
import Header from './components/Header'
import Hero from './components/Hero'
import Order from './components/Order'
import SignUp from './components/Authentication/SignUp';
import DashBoard from './components/Dashboard'
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <div>

      </div>
      <Order />

      <Router>
        <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={DashBoard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
