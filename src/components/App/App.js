import './App.css';
import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Switch>
      <Route path="/movies">
      <Movies />
      </Route>
      <Route path="/saved-movies">
      <SavedMovies />
      </Route>
      <Route path="/profile">
      <Profile /> 
      </Route>
      <Route exact path="/">
      <Main /> 
      </Route>
      <Route path="/signin">
      <Login /> 
      </Route>
      <Route path="/signup">
      <Register /> 
      </Route>
      <Route path="*">
      <NotFound />
      </Route>
      </Switch>
      <Footer />
    </>  
  );
}

export default App;
