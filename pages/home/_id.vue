 <template>
  <div>
    <div style="display: flex">
      <img v-for="image in home.images" :key="image" :src="image" style="width: 200px" />
    </div>
    {{ home.title }}<br/>
    {{ home.pricePerNight }} /night <br/>
     <img src="/images/marker.svg" width="20" height="20"  />{{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}
     <img src="/images/star.svg" width="20" height="20"  />{{ home.reviewValue }} <br />
     {{ home.guests }} guests     {{ home.bedrooms }} rooms     {{ home.beds }} beds     {{ home.bathrooms }} bath<br/>
    {{ home.description }}

    <div v-for="review in reviews" :key="review.objectID">
      <img :src="review.reviewer.image" width="50" height="50"  /><br/>
      {{ review.reviewer.name }}<br/>
      {{ review.date }}<br/>
      {{ review.comment }}<br/>
    </div>
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
    const homeResponse = await $dataApi.getHome(params.id) 
    if(!homeResponse.ok)
    {
       return error({statusCode:homeResponse.status, messgae: homeResponse.statusText})
    }

    const reviewResponse = await $dataApi.getReviewsByHomeId(params.id) 
    if(!reviewResponse.ok)
    {
       return error({statusCode:reviewResponse.status, messgae: reviewResponse.statusText})
    }
       return {
        home: homeResponse.json,
        reviews: reviewResponse.json.hits,
      }
  } 
 }
 </script>    