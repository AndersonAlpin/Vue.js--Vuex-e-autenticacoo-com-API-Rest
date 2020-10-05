import Vue from 'vue'
import VueResource from 'vue-resource'

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

http.options.root = 'https://guarded-headland-11685.herokuapp.com/'

export { http }
