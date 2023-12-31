import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
    </div>
  );
}

export default App;
