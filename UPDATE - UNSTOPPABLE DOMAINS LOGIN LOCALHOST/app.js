import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: '61a71fe6-739b-4bf9-9e5a-1094791c747d',
  redirectUri: 'http://localhost',
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