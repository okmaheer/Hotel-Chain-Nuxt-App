<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold">Admin</h1>
        <div class="bg-gray-200 p-2">
            <nuxt-link to="/admin/homes/">Homes</nuxt-link>
        </div>
        <nuxt-child></nuxt-child>
    </div>
</template>
<script>
export default {
  head(){
  return{
    title: 'Admin',
  
  }
},

};
</script>