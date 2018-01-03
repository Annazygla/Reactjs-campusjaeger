import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Lebenslauf from './Lebenslauf'

const Main = () => (
    <main>
      <switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Lebenslauf' component={Lebenslauf} />
      </switch>
    </main>
)

export default Main;
