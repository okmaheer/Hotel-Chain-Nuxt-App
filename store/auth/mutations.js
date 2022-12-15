export default {
    setIsLoggedIn(state, value) {
      console.log(value)
        state.isLoggedIn = value
    },
    setUser(state, value){
      state.user = value

    }
}