 <template>
  <div>
    <div style="display: flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        style="width: 200px"
      />
    </div>
    {{ home.title }}<br />
    {{ home.pricePerNight }} /night <br />
    <img src="/images/marker.svg" width="20" height="20" />{{
      home.location.address
    }}
    {{ home.location.city }} {{ home.location.state }}
    {{ home.location.country }}
    <img src="/images/star.svg" width="20" height="20" />{{ home.reviewValue }}
    <br />
    {{ home.guests }} guests {{ home.bedrooms }} rooms {{ home.beds }} beds
    {{ home.bathrooms }} bath<br />
    {{ home.description }}

    <div v-for="review in reviews" :key="review.objectID">
      <img :src="review.reviewer.image" width="50" height="50" /><br />
      {{ review.reviewer.name }}<br />
      {{ formatDate(review.date) }}<br />
      <short-text :text="review.comment" :target="150" /><br />
    </div>
    <img :src="user.image" width="50" height="50" /><br />
    {{ user.name }}<br />
    {{ formatDate(user.joined) }}<br />
    {{ user.reviewCount }}<br />
    {{ user.description }}<br />
  </div>
</template>
 <<script>
 export default {
    head(){
        return {
        title:this.home.title,
        }
    },
    async asyncData({params,$dataApi, error}){
      const responses = await Promise.all([
      await $dataApi.getHome(params.id),
      await $dataApi.getReviewsByHomeId(params.id),
      await $dataApi.getUserByHomeId(params.id) 
      ])

      const badResponse = responses.find((response)=> !response.ok)
      if(badResponse) return ({statusCode:badResponse.status, messgae: badResponse.statusText})
   
       return {
        home: responses[0].json,
        reviews: responses[1].json.hits,
        user: responses[2].json.hits[0],
      }
  }, 
  methods:{
     formatDate(dateStar){
     const date = new Date(dateStar)
     return date.toLocaleDateString(undefined,{ month:'long', year: 'numeric'})
     }
}
 }
 </script>    