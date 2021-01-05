import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '../components/Box';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Box} />
    </Switch>
  );
};

export default Routes;
