export default {
    IsLoggedIn({ state, commit },value) {
        commit('setIsLoggedIn',value)
    },
    setUser({ state, commit },value) {
        console.log('setUse',value)
        commit('setUser',value)
    }
}