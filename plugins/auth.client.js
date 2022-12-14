import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";
import { unWrap } from '~/utils/fetchUtils'
export default (context, inject) => {
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
        console.log('login check', context.store.getters["auth/isLoggedIn"])
        if (!context.store.getters["auth/isLoggedIn"]) {
            google.accounts.id.prompt();
        }
        google.accounts.id.renderButton(
            document.getElementById("googleButton"),
            {
                theme: "outline", size: "large"
            }
        )
    }
    async function handleCallbackResponse(response) {
        const credential = response.credential
        const userObject = jwt_decode(credential);
        if (!userObject.email_verified) {
            Cookie.remove(context.$config.auth.cookieName)
            context.store.commit('auth/setIsLoggedIn', false);
        }
        document.getElementById("googleButton").hidden = true;
        Cookie.set(context.$config.auth.cookieName, credential, { expires: 1/24, sameSite: 'Lax' })
           console.log(userObject,'here')
        try {
            const response = await unWrap(await fetch('/api/user'))
            const user = response.json
            // const user = response.json
            // console.log('user', user)

            context.store.commit('auth/setIsLoggedIn', true);
            context.store.dispatch('auth/setUser', {
                name: user.name,
                profileUrl: user.image
            });
        }
        catch(error){
        console.log(error)
        }
        


    }

    function signout() {
        Cookie.remove(context.$config.auth.cookieName);
        document.getElementById("googleButton").hidden = false;
        context.store.commit('auth/setIsLoggedIn', false);
        context.store.dispatch('auth/setUser', { });
    }

}