import HeaderComponent from './HeaderComponent.js'
import Genres from './GenresComponent.js'
import Home from './HomeComponent.js'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <HeaderComponent />
        <Route path='/' exact component={Home} />
        <Route path='/generos' component={Genres} />
      </div>
    </Router>
  );
}

export default App;
