import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";
export default (context,inject) => {
    inject('authApi', {
        signout
      })
    addScript()
    function addScript() {
        const script = document.createElement('script')
        script.src = "https://accounts.google.com/gsi/client"
        script.async = true
        script.defer = true
        // window.initAuth = init
        document.head.appendChild(script)

    }
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: context.$config.auth.clientId,
            callback: handleCallbackResponse,
        })
        console.log(context.store)
        console.log('login check',context.store.getters["auth/isLoggedIn"])
        if(!context.store.getters["auth/isLoggedIn"]){
            google.accounts.id.prompt();
        }
        google.accounts.id.renderButton(
            document.getElementById("googleButton"),
            {
                theme: "outline", size: "large"
            }
        )
    }
    function handleCallbackResponse(response) {
        const credential = response.credential
        const userObject = jwt_decode(credential);
        if(!userObject.email_verified){
            Cookie.remove(context.$config.auth.cookieName) 
            context.store.commit('auth/setIsLoggedIn', false);
        }
        context.store.commit('auth/setIsLoggedIn', true);
        context.store.commit('auth/setIsLoggedIn', true);
        document.getElementById("googleButton").hidden = true;
        Cookie.set(context.$config.auth.cookieName, credential, { expires: 1 / 24, sameSite: 'Lax' })


    }

    function signout() {
        google.accounts.id.disableAutoSelect();
    }

}