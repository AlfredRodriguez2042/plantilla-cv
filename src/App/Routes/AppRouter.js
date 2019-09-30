import React from 'react'
import { Switch , Route} from 'react-router-dom'

// Paths

import Home from '../Views/Home'
import About from '../Views/About'
import Contact from '../Views/Contact'
import SignUp from '../Views/SignUp'
import SignIn from '../Views/SignIn'
import Page404 from '../Views/Page404'


const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/signup' component={SignUp}/>
                <Route exact path='/signin' component={SignIn}/>
                <Route component={Page404}/>
                
            </Switch>
        </>
    )
}

export default AppRouter
