import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Order from './components/Order'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Order />
    </div>
  );
}

export default App;
