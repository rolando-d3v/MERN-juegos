import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from './layout/Navigation'
import Home from './core/Home'
// import Search from './core/Search'
import Signup from './core/Signup'
import Signin from './core/Signin'
import AddVideogame from './core/AddVideogame'
import AddCategory from './core/AddCategory'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact={true} path="/"  component={Home} />
                <Route exact={true} path="/signin"  component={Signin} />
                <Route exact={true} path="/signup"  component={Signup} />
                <Route exact={true} path="/addcategory"  component={AddCategory} />
                <Route exact={true} path="/addvideogame"  component={AddVideogame} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
