import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Feed from './pages/Feed';
import './App.css';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </section>
  );
}

export default App;
