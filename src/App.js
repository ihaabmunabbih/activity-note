import { Switch, Route } from 'react-router';

import './App.css';

import Home from './Pages/Home';
import ActivityForm from './Pages/ActivityForm';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add-activity">
          <ActivityForm />
        </Route>
        <Route path="/exercise/:id/edit">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
