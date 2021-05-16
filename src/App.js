import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import EditGenre from './EditGenre.js';
import Genres from './GenresComponent.js'
import HeaderComponent from './HeaderComponent.js'
import InfoSerie from './InfoSerie'
import Home from './HomeComponent.js'
import NewGenre from './NewGenre.js'
import Series from './SeriesComponent';
import NewSerie from './NewSerie';

function App() {

  return (
    <Router>
      <div>
        <HeaderComponent />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/generos' exact component={Genres} />
          <Route path='/generos/novo' component={NewGenre} />
          <Route path='/generos/:id' component={EditGenre} />
          <Route path='/series' exact component={Series} />
          <Route path='/series/novo' component={NewSerie} />
          <Route path='/series/:id' component={InfoSerie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
