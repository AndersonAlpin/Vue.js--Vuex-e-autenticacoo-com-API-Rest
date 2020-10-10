import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'

Vue.use(VueResource)

const http = Vue.http

// -------------------------------------------->
// API HOSPEDADA NO HEROKU 
// https://guarded-headland-11685.herokuapp.com/
// <--------------------------------------------

// -------------------------------------------->
// API LOCAL
// http://localhost:5000/
// <--------------------------------------------

// -------------------------------------------->
// EMAILS AND PASSWORDS
// https://github.com/arthurzeras/series-wished/blob/master/webserver/__mocks__/users.json
// <--------------------------------------------


http.options.root = 'https://guarded-headland-11685.herokuapp.com/'

http.interceptors.push(interceptors)

Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

const setBearerToken = token => {
    http.headers.common['Authorization'] = `Bearer ${token}`
}

export default services
export { http, setBearerToken }
