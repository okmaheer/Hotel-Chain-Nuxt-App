export default function (content,inject){
    const appId = 'SXPH6JHYHV'
    const apiKey = '0ac16392c96377fc41bf8b413bffb891'
     const headers={
      'X-Algolia-API-key':apiKey,
      'X-Algolia-Application-Id':appId,
   }
      inject('dataApi',{
        getHome
      })
   async function getHome(homeId){ 
    try{
    return unWrap( await fetch(`https://${appId}-dsn.algoliia.net/1/indexes/homes/${homeId}`,{headers})) 
    }
    catch(error){
      return getErrorResponse(error);
    }   
  }
      
   async function unWrap(response){
      const json = await response.json()
      const { ok , status , statusText } = response
      return {
         json,
         ok,
         status,
         statusText
      } 
    }

    function getErrorResponse(error){
      return{
        ok:false,
        status:500,
        statusText: error.message,
        json:{}
      }
    }
} 