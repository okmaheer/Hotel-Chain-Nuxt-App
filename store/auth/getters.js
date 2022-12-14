import Cookie from "js-cookie";
export default {
      isLoggedIn(state) {
      if(state.isLoggedIn || Cookie.get('idToken')){
        return true;
      }
        return false;
    },
    User(state){
      return state.user
    }
    

}