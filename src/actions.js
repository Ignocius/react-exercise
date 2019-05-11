import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDIG,
    REQUEST_ROBOTS_SUCCES,
    REQUEST_ROBOTS_FAILED
 } from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => async (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDIG }); 
    const data = await fetch('https://jsonplaceholder.typicode.com/users').catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
    const users = await data.json()
    dispatch({ type: REQUEST_ROBOTS_SUCCES, payload: users})
}