import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Hero from './components/Hero'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="delete"></div>
    </div>
  );
}

export default App;
