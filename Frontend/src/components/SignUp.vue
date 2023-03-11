<template>
    <form class="flex flex-col">
        <img src="../assets/logo.png" class="w-56 self-center mb-2 mt-12 animate-pulse">
        <h1 class="self-center text-4xl">Sign UP</h1>
        <input required type="text" v-model="name" placeholder="Enter Name" class=" w-96 self-center mb-10 py-3 px-6 mt-8 border-4 border-x-green-400">
        <input required type="email" v-model="email" placeholder="Enter Email" class=" w-96 self-center mb-10 py-3 px-6 border-4 border-x-green-400">
        <input required type="password" v-model="password" placeholder="Enter Password" class=" w-96 self-center mb-10 py-3 px-6 border-4 border-x-green-400">
        <button v-on:click="signUp" type="submit" class=" w-44 self-center mb-10 py-3 px-6 bg-red-800 hover:bg-red-900 space-x-2 border-4 border-x-green-400 text-white">Sign Up</button>
    </form>
</template>

<script lang="ts">
import axios from "axios"
export default {
    data(){
      return{
        name:'',
        email:'',
        password:''
      }
    },
    methods:{
        
        async signUp(){
            // data as dictionary in javascript
            let data = {
                name:this.name,
                email:this.email,
                password:this.password
            };

            let result = await axios.post("http://localhost:3000/user",data);
            // 201 meaning like previous login
            if(result.status == 201){
                localStorage.setItem("name", this.name);
                localStorage.setItem("email", this.email);
                localStorage.setItem("password", this.password);
                // window.location.reload();
                // this.$router.push({name:"Home"})  
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('infor-user');
        if (user){
            this.$router.push({name:"Home"})
        }
    }
}
</script>