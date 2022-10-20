<template>
    <div style="text-align: center;">
        <img  style="margin-left:350px;" src="https://www.statuscake.com/cdn-cgi/image/width=1536,quality=80,format=auto/wp-content/uploads/2021/07/iStock-1288486076.jpg"/><br/><br/>
        <h1>Error!</h1>
        {{ error.message }} 
        </div>
    </template>
    <script
    export default {
        head(){
            return {
                title: 'BIG PROBLEMS',
            }
        },
        props: {
            error:{
                type: Object,
                required: true,
            }
        }
    }
    </script>