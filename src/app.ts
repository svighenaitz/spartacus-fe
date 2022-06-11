// src/app.ts

import { request } from "umi";
import Cookies from 'js-cookie'

export async function getInitialState() {  
    if(Cookies.get('jwt')) return { jwt: Cookies.get('jwt')};
    const login = await request(`/api/auth/local`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({identifier: 'api_giuliano@test.com',password: 'api_giuliano',}),
    });    
    Cookies.set('jwt', login?.jwt, { path: '/', expires: 30 }) 
    return login;
  }