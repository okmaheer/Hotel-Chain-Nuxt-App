<template>
    <div>
        <header>
            <nuxt-link to="/">Home</nuxt-link>
            <input type="text" ref="citySearch">
        </header>
        <nuxt/>
    </div>
</template>
<script>
export default{
    mounted(){
        this.$maps.makeAutoComplete(this.$ref.citySearch)
    },
    methods:{
        changed(event){
            const place = event.detail
            if(!place.geometry)return
            
            this.$router.push({
                name:'search',
                query:{
                    Lat: place.geometry.location.lat(),
                    Lng: place.geometry.location.lng(),
                    Label: this.$refs.citySearch.value,

                }
            })
        }


        
    }
    
}

</script>
