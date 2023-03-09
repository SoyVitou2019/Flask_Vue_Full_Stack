<template>
  <div>
    <Home />
    <Contact_Us />
    <login />
  </div>
</template>

<script>
import Home from "./components/Home.vue"
import Contact_Us from "./components/Contact_us.vue"
import login from "./components/login.vue"
export default {
  components:{
      Home,
      Contact_Us,
      login
    },
  setup() {
   
    return {
      Home,
      Contact_Us,
      login
    }
  },
}
</script>
