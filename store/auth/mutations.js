export default {
    setIsLoggedIn(state, value) {
        state.isLoggedin = value
    },
    setUser(state, value){
       
      state.user = value
      console.log(state)
    }
}