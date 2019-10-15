import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

//Styles
import '../scss/main.scss'
//Paths
import AppRouter from './Routes/AppRouter'
import Header from './Components/Navigation/Header'
import Footer from './Components/Footer'


const App = ()=>{
    const [loading,load] = useState(true)
    return(
        
        <Router>
            <Header/>
            <div className="ctn">
            <AppRouter/>
            </div>
            <Footer/>
        </Router>
       
    )
}

export default App