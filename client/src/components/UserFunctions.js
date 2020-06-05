/*
Author: Nishant Kumar
Description: This is the file where the authentication occurs, as implied before there was a problem and it will soon be resolved
             in the future.
*/

import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log('Registered!')
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        console.log(res.data)
        if (typeof res.data === 'string'){
            localStorage.setItem('usertoken', res.data)
        } else {
            console.log("password is incorrect")
        }
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

export const getProfile = user => {
    return axios
      .get('users/profile', {
        headers: { Authorization: `${user}` }
      })
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }