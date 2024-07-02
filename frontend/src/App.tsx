import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Echo from './components/Echo';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/echo">Echo</a></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/users/:username" component={UserDetails} />
          <Route path="/users" component={UserList} />
          <Route path="/echo" component={Echo} />
          <Route path="/" exact>
            <h1>Welcome to Vulnerable Fullstack Demo</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;