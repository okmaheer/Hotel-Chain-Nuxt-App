export default {
    setIsLoggedIn(state, value) {
      console.log(value,'value')
        state.isLoggedIn = value
    },
    setUser(state, value){
      state.user = value

    }
}