import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from './layout/Navigation'
import Home from './core/Home'
import Search from './core/Search'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact={true} path="/"  component={Home} />
                <Route exact={true} path="/search"  component={Search} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
