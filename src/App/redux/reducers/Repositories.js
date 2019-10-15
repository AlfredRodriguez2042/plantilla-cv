import {GET_REPOS,ERROR_REPOS} from '../actions/types'

const INITIAL_STATE = []

export const repositories = (state=INITIAL_STATE, {type,payload})=>{
    switch(type){
        case GET_REPOS:
            return payload
            
         case ERROR_REPOS:
             return payload   
        default:
            return state    
    }
}