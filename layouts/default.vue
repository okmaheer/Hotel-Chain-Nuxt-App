<template>
    <div class="app">
        <header class="app-header">
            <div class="app-logo">
                <img src="/images/logo.svg" alt="">
            </div>
            <div class="app-search">
                <input type="text" ref="citySearch" @changed="changed" placeholder="Enter your address" />
                <input type="text" class="datepicker" placeholder="Check in" />
                <input type="text" class="datepicker" placeholder="Check out" />
                <button>
                    <img src="/images/icons/search.svg" />
                </button>
            </div>
            <div class="app-user-menu">
                <template v-if="isLoggedIn">
                    <img src="/images/icons/house.svg" />
                    <div class="name">{{ user.name }}</div>
                    <img :src="user.picture" alt="" class="avatar" />
                </template>
                <div id="googleButton" class="ml-8" v-if="!isLoggedIn"></div>
            </div>
        </header>
        <nuxt />
    </div>
</template>
<script>
export default {
    mounted() {
        // console.log(google.accounts.id);
        this.$maps.makeAutoComplete(this.$refs.citySearch)
    },
    computed: {
        user() {
            console.log(this.$store.state.auth.user)
            return this.$store.state.auth.user
        },
        isLoggedIn() {

            return this.$store.getters["auth/isLoggedIn"]

        }
    },
    methods: {
        changed(event) {
            // console.log(google.accounts.id);
            const place = event.detail
            if (!place.geometry) return

            this.$router.push({
                name: 'search',
                query: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                    label: this.$refs.citySearch.value,

                }
            })
        }


    }

}

</script>
