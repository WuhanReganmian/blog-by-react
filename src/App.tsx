import React, { lazy, Suspense } from 'react';
// import Loading from 'src/Components/Loading';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Layout = lazy(() => import('./Components/layout/index'));
// const Login = lazy(() => import('./Components/Login'));
const Blank = lazy(() => import('./Components/404'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/404' />} />
          <Route path='/404' exact component={Blank} />
          <Route component={Layout} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
