import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/scss/main.scss';
import Layout from './Layout';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Player from './Player';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/player/:id' component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
