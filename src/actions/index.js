import axios from 'axios'


export const BASE_URL = `https://intern-challenge.herokuapp.com/persons`;
export const CREATE_PEOPLEDATA = "CREATE_PEOPLEDATA"

export const FETCH_PEOPLEDATA = 'FETCH_PEOPLEDATA';
export const FETCH_PERSON = 'FETCH_PERSON';




export function fetchData() {
    const peopleUrl = `${BASE_URL}`;
    const request= axios.get(peopleUrl)

    console.log('Data:', request)


    return{
        type: FETCH_PEOPLEDATA,
        payload: request
    }
}

export function createPeopleData(description) {
    const request = axios.post(`${BASE_URL}/persons/${id}`)
    return {
        type: CREATE_PEOPLEDATA,
        payload: request
    }
}

// export function getPersonData(id) {
//     const request = axios.get(`${BASE_URL}`)
//     console.log('person',request)
//     return {
//         type: FETCH_PERSON,
//         payload: request



