import { createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { repositories } from './reducers/Repositories'

const reducer = combineReducers({
    repositories,
})

// 1 reducer 2 middleware
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)) 
)

export default store