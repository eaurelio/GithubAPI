import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Repositories from '../pages/Repositories'
import Home from '../pages/Home'

export default function Routes () {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/repositories" component={Repositories} />
        </Switch>
      </BrowserRouter>
    )
}