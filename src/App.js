import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </section>
  );
}

export default App;
