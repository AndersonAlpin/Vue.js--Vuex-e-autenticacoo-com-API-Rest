import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const http = Vue.http

// -------------------------------------------->
// MESMA API HOSPEDADA NO HEROKU 
// https://guarded-headland-11685.herokuapp.com/
// <--------------------------------------------

http.options.root = 'http://localhost:5000/'

export { http }
