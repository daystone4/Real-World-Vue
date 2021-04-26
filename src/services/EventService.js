import axios from 'axios'

// Single Axios Instance we can use for our whole app

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3', // base url for all of our calls to use
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
  export default {
    getEvents() {
      return apiClient.get('/events') // add the string of events, this is added onto the base url
    },
    getEvent(id) {
      return apiClient.get('/events/' + id) // 
    }
  }