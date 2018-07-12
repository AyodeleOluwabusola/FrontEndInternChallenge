import axios from 'axios'

const BASE_URL = `https://intern-challenge.herokuapp.com/persons`;

export const FETCH_PEOPLEDATA = 'FETCH_PEOPLEDATA';

export function fetchData() {
    const peopleUrl = `${BASE_URL}`;
    const request= axios.get(peopleUrl)
    console.log('Data:', request)

    return{
        type: FETCH_PEOPLEDATA,
        payload: request
    }
}