import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';
import './App.css';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </section>
  );
}

export default App;
