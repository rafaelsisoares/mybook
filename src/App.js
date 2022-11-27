import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/feed" component={Feed} />
        <Route path="/new-post" component={NewPost} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
}

export default App;
