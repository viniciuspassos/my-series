import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import EditGenre from './EditGenre.js';
import Genres from './GenresComponent.js'
import HeaderComponent from './HeaderComponent.js'
import Home from './HomeComponent.js'
import NewGenre from './NewGenre.js'

function App() {

  return (
    <Router>
      <div>
        <HeaderComponent />
        <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Genres} />
        <Route path='/generos/novo' component={NewGenre} />
        <Route path='/generos/:id' component={EditGenre} />
      </div>
    </Router>
  );
}

export default App;
