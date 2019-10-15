import React from 'react'
import { render } from 'react-dom'
import App from './App/App'
import { Provider } from 'react-redux'
import  store  from './App/redux/store'


render(
    <Provider store={store}>
       <App/>
    </Provider>


, document.getElementById('root'))
