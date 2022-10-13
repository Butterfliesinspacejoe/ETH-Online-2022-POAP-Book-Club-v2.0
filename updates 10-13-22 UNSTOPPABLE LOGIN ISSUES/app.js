import "./addRequire.js";
import UAuth from './node_modules/@uauth/js/index.module.mjs';
//import UAuth from './node_modules/@uauth/js/index.umd.js';
//import UAuth from './node_modules/@uauth/js/index.cjs';
//const UAuth= require('/node_modules/@uauth/js');
//import UAuth from './UAuth/js';

const uauth = new UAuth({
  clientID: '61a71fe6-739b-4bf9-9e5a-1094791c747d',
  redirectUri: 'https://poapbookclub.com',
})

window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }


  


window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }