<template>
  <div class="app-padded-vertical">
    <div class="app-wrapper">
      <h2 class="app-title">Premium Listings</h2>
      <div class="app-gallery">
        <nuxt-link
          :to="listing.url"
          v-for="(listing, index) in listings"
          :key="index"
          class="app-gallery-item"
          :class="`city-${listing.id}`">
          <div>
            <h3>{{ listing.city }}</h3>
            <p>{{ listing.country }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const listings = [
  { id: 'isb', city: 'Islamabad', country: 'Pakistan', url: '/search?lat=33.6844202&lng=73.04788479999999&label=Islamabad,%20Pakistan&start=1670544000&end=1670630400' },
  { id: 'lahore', city: 'Lahore', country: 'Pakistan', url:'/search?lat=31.5203696&lng=74.35874729999999&label=Lahore,%20Pakistan&start=1670544000&end=1670630400' },
  { id: 'karachi', city: 'Karachi', country: 'Pakistan', url: '/search?lat=24.8607343&lng=67.0011364&label=Karachi,%20Pakistan&start=1670544000&end=1670630400' },
  { id: 'peshawar', city: 'Peshawar', country: 'Pakistan', url: '/search?lat=34.0151366&lng=71.5249154&label=Peshawar,%20Pakistan&start=1670544000&end=1670630400' },

]

export default {
  data () {
    return { listings }
  }
}
</script>
