<template>
    <form class="flex flex-col h-screen">
        <img src="../assets/logo.png" class="w-56 self-center mb-2 mt-3 animate-pulse">
        <h1 class="self-center text-4xl">Sign UP</h1>
        <input required type="text" v-model="name" placeholder="Enter Name" class=" w-64 self-center mb-10 py-3 px-4  mt-8 border-4 border-x-green-400 md:w-96">
        <input required type="email" v-model="email" placeholder="Enter Email" class=" w-64 self-center mb-10 py-3 px-4  border-4 border-x-green-400 md:w-96">
        <input required type="password" v-model="password" placeholder="Enter Password" class=" w-64 self-center mb-10 py-3 px-4  border-4 border-x-green-400 md:w-96">
        <button v-on:click="signUp" type="submit" class=" w-44 self-center mb-10 py-3 px-6 bg-red-800 hover:bg-red-900 space-x-2 border-4 border-x-green-400 text-white">Sign Up</button>
    </form>
</template>

<script lang="ts">
import axios from "axios"
export default {
    data(){
      return{
        name:"",
        email:"",
        password:""
      }
    },
    methods:{
        signUp(){
            // data as dictionary in javascript
            let data = {
                name:this.name,
                email:this.email,
                password:this.password
            };
            if(data.name != "" && data.email != "" && data.password != ""){  
                
                let result = axios.post("http://localhost:3000/user",data);
                alert(result)
                localStorage.setItem("name", this.name);
                localStorage.setItem("email", this.email);
                localStorage.setItem("password", this.password);
             
            
                
            }
        }
    },
    mounted(){
        let name = localStorage.getItem('name');
        let email = localStorage.getItem('email');
        let pass = localStorage.getItem('password');
        if (name != '' && email != '' && pass != ''){
            this.$router.push({name:"Home"})
        }
    }
}
</script>


