import http from 'k6/http';
import { sleep } from 'k6';


export let options ={
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages:[
        {duration: '10s', target:100},  // below normal load
        {duration: '1m', target:100},
        {duration: '10s', target:1400}, // spike to 1400 users
        {duration:'3m', target:1400},  // stay at 1400 for 3 minutes
        {duration: '10s', target:100}, //scale down. Recovery stage.
        {duration: '3m', target:100},
        {duration: '10s', target:0}, 
           

        
    ],

};
const API_BASE_URL = 'http://localhost:3001';

export default () =>{
    http.batch([
        ['GET', `${API_BASE_URL}/login`]
        ['GET', `${API_BASE_URL}/signup`]
        ['GET', `${API_BASE_URL}/category/all`]
        ['GET', `${API_BASE_URL}/category`]
        ['GET', `${API_BASE_URL}/category/phones`]
        ['GET', `${API_BASE_URL}/category/laptops`]
        ['GET', `${API_BASE_URL}/orders`]
        

    ]);
    sleep(1);
    

};