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
      <div className='container' >
        <div className='link--burger'>

        </div>
      </div>

    </div>
  );
}

export default App;
