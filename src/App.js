import './styles/App.scss';
import Header from './components/Header'
import Hero from './components/Hero'
import Order from './components/Order'
import SignUp from './components/Authentication/SignUp';
import { AuthProvider } from './contexts/AuthContext';


function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Hero />
        <div>

        </div>
        <Order />
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;
