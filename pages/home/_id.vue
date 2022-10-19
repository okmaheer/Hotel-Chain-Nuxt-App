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
    const response = await $dataApi.getHome(params.id) 
    if(!response.ok)
    {
       return error({statusCode:response.status, messgae: response.statusText})
    }
       return {
        home: response.json,
      }
  } 
 }
 </script>   