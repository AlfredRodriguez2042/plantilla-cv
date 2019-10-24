import React from 'react'
import { Switch , Route} from 'react-router-dom'

// Paths

import Home from '../Views/Home'
import About from '../Views/About'
import Contact from '../Views/Contact'
import Cloud from '../Views/Cloud'
import Systems from '../Views/Systems'
import Page404 from '../Views/Page404'
import Programing from '../Views/Programin'
import Desing from '../Views/Desing'


const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/cloud' component={Cloud}/>
                <Route exact path='/System' component={Systems}/>
                <Route exact path='/programing' component={Programing}/>
                <Route exact path='/desing' component={Desing}/>
                <Route component={Page404}/>
                
            </Switch>
        </>
    )
}

export default AppRouter
