
import Intro from './components/Intro';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Contact" component={ContactPage} />
        </Switch>
     {/* <Intro/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
