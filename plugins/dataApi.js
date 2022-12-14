import { unWrap, getErrorResponse} from '~/utils/fetchUtils'
export default function ({$config}, inject) {

  const headers = {
    'X-Algolia-API-key': $config.algolia.key,
    'X-Algolia-Application-Id': $config.algolia.appId,
  }
  inject('dataApi', {
    getHome,
    getReviewsByHomeId,
    getUserByHomeId, 
    getHomesByLocation
  })
  async function getHome(homeId) {
    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, { headers }))
    }
    catch (error) {
      return getErrorResponse(error);
    }
  }
  async function getReviewsByHomeId(homeId) {
    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/reviews/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          filters: `homeId:${homeId}`,
          hitsPerPage: 6,
          // attributesToHighLight:[],
        })
      }))
    } catch (error) {
      return getErrorResponse(error)
    }
  }
  async function getUserByHomeId(homeId) {
    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/users/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          filters: `homeId:${homeId}`,
          attributesToHighlight: [],
        })
      }))
    } catch (error) {
      return getErrorResponse(error)
    }
  }
  async function getHomesByLocation (Lat,Lng, radiusInMeters = 35000) {

    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          aroundLatLng:`${Lat},${Lng}`,
          aroundRadius:radiusInMeters,
           hitsPerPage: 10,
          attributesToHighlight: [],
        })
      }))
    } catch (error) {
      return getErrorResponse(error)
    }
  }

} 