import axios from "axios"

import { GET_REPOS, ERROR_REPOS } from './types'

const users = 'AlfredRodriguez2042'
const API = 'https://api.github.com/users/alfredrodriguez2042/repos'
const user = 'https://jsonplaceholder.typicode.com/users'

export const getRepositories = ()=>{ 
    return async dispatchEvent => {
        try {
            const res = axios.get(user)
            console.log('res')

            dispatchEvent({
                type: GET_REPOS,
                payload: 'hola mundo'
            })
        } catch (error) {
            dispatchEvent({
                type: ERROR_REPOS,
                payload: 'error en la peticion'
            })
            
        }
    }  
    
}