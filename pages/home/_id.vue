 <template>
        <div>
    <img :src="home.images[0]" style="width:200px"><br/>
   {{ home.title }}<br/>
   {{ home.location.address }} {{ home.location.city }} {{  home.location.state }} <br/>
   {{ home.guests }} guests <br/>
   {{ home.pricePerNight }} /night <br/>
  
  </div>
 </template>
 <<script>
import homes from "~/data/homes";
 export default {
    data(){
        return {
            home:{},
        }
    },
  created(){
   this.home = homes.find((home) => home.objectID == this.$route.params.id)

  } 
 }
 </script>   