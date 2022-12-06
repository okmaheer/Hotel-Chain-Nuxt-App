export default {
    IsLoggedIn({ state, commit },value) {
        commit('setIsLoggedIn',value)
    }
}