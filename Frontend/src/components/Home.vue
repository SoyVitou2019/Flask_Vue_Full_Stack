<template>
    <div>
        <!-- Top home page -->
        <div>
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-24">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <!-- Mobile menu button -->
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <!-- Icon when menu is closed. -->
                                <!--
                                    Heroicon name: menu

                                    Menu open: "hidden", Menu closed: "block"
                                -->
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <!-- Icon when menu is open. -->
                                <!--
                                    Heroicon name: x

                                    Menu open: "block", Menu closed: "hidden"
                                -->
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 flex">
                                <!-- Logo -->
                                <img src="../assets/images/Logo.jpg" class="w-7 h-7 mr-2 rounded-sm">
                                <a href="#" class="text-white font-bold text-xl">E-Learning</a>
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <!-- Navigation links -->
                                    <a v-on:click="route_home"  href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Home</a>
                                    <!-- button Category -->
                                    <a v-on:click = "route_category" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Categorys</a>
                                    <a v-on:click = "route_material" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Materials</a>
                                    <a v-on:click = "route_tools" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Tools</a>
                                    <a v-on:click = "route_graph" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Graphs</a>
                                    <a v-on:click = "route_about" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">About</a>
                                    <a href="" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium self-end">Login</a>
                                    <a v-on:click = "route_sign_up" href="" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium self-end">Sign Up</a>
                                    <a v-on:click="route_contact_us" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Mobile menu -->
                <div class="sm:hidden bg-white" id="mobile-menu">
                    <div class="hidden px-2 pt-2 pb-3 space-y-1">
                        <!-- Navigation links -->
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium">Home</a>
                        <div class="relative">
                            <!-- Dropdown toggle button -->
                            <button type="button" class="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
                            Category
                            </button>
                            <!-- Dropdown menu -->
                            <div class="hidden absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="mobile-menu-button" role="menu">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
                            </div>
                        </div>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium">Materials</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium">About</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium" >Contact</a>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Text between webpack -->
        <div class="bg-green-100 w-auto h-56 flex justify-center sm:h-96">
           <div class="flex flex-col text-center justify-center space-y-7">
                <logo class=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">E-Learning Club's Pro Vitou</logo>
                <div class="flex flex-col">
                    <logo class=" text-sm sm:text-xl md:text-2xl lg:text-3xl">Click on the Images below to View My Crushs !</logo>
                    <logo class=" text-sm sm:text-xl md:text-2xl lg:text-3xl">The journey of a thousand miles begins with a single step. As like As me love you.</logo>
                </div>
           </div>
        </div>

        <div class="bg-gray-800 text-white flex justify-center h-auto pt-10 md:h-96">
            <div class="grid grid-cols-1 items-center md:items-center md:grid-cols-3 md:gap-14">

                <div class="grid grid-cols-1  w-72 md:w-56">
                    <div class=" w-72 h-52 md:w-56 md:h-44 bg-black hover:scale-105 hover:drop-shadow-2xl" style="background: url(https://media.istockphoto.com/id/1407983911/photo/forex-diagrams-and-stock-market-rising-lines-with-numbers.jpg?b=1&s=170667a&w=0&k=20&c=HJCXFfwpkSC0XIHhIKoEaERF1TnN773k5NfLWTfryQs=); background-size: cover;"></div>
                    <div class="my-5 grid grid-rows-1 m-auto">
                        <text>AIRLINE INDUSTRY</text>
                        <text1>CLICK TO LAUNCH</text1>
                    </div>
                </div>
                <div class="grid grid-cols-1 w-72 md:w-56">
                    <div class=" w-72 h-52 md:w-56 md:h-44 bg-black hover:scale-105 hover:drop-shadow-2xl" style="background: url(https://d1.awsstatic.com/executive-insights/image-dont-overlook-cloud-a-strategic-tool-for-cfos-577-326.fa9217db42973b2f165e38ce05b21e3af62befae.jpg); background-size: cover;"></div>

                    <div class="my-5 grid grid-rows-1 m-auto">
                        <text>AIRLINE INDUSTRY</text>
                        <text1>CLICK TO LAUNCH</text1>
                    </div>
                </div>
                <div class="grid grid-cols-1 w-72 md:w-56">
                    <div class=" w-72 h-52 md:w-56 md:h-44 bg-black hover:scale-105 hover:drop-shadow-2xl" style="background: url(https://realestatemarket.com.mx/images/2021/09-septiembre/1409/Fibra_HD_informa_sobre_el__valor_financiero_razonable__por_fusin__.jpeg); background-size: cover;"></div>
                    <div class="my-5 grid grid-rows-1 m-auto">
                        <text>AIRLINE INDUSTRY</text>
                        <text1>CLICK TO LAUNCH</text1>
                    </div>
            </div>
                
                
            
            </div>
        </div>

        <div>
            <div class="bg-gray-400 py-10">
                <div class="grid grid-cols-2 space-y-7   place-items-center pt-10 md:grid-cols-4 ">
                    <div class=" space-y-6">
                        <h3 class=" text-xl font-bold">Explore Zap1</h3>
                        <ul class=" list-disc list-inside space-y-3">
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                        </ul>
                    </div>
                    <div class=" space-y-6">
                        <h3 class=" text-xl font-bold">Explore Zap2</h3>
                        <ul class=" list-disc list-inside space-y-3">
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                        </ul>
                    </div>
                    <div class=" space-y-6">
                        <h3 class=" text-xl font-bold">Explore Zap3</h3>
                        <ul class=" list-disc list-inside space-y-3">
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                        </ul>
                    </div>
                    <div class=" space-y-6">
                        <h3 class=" text-xl font-bold">Explore Zap4</h3>
                        <ul class=" list-disc list-inside space-y-3">
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                            <li>
                                <a>Measurements</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr class="mt-10">
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    methods:{
        route_contact_us (){
            this.$router.push({name:"Contact_us"})
        },
        route_home (){
            this.$router.push({name:"Home"})
        },
        route_category (){
            this.$router.push({name:"Categorys"})
        },
        route_material (){
            this.$router.push({name:"Materials"})
        },
        route_graph (){
            this.$router.push({name:"Graphs"})
        },
        route_about (){
            this.$router.push({name:"Abouts"})
        },
        route_login (){
            this.$router.push({name:"contact_us"})
        },
        route_sign_up (){
            this.$router.push({name:"SignUp"})
        },
        route_tools (){
            localStorage.setItem("numbers","1")
            this.$router.push({name:"Tools"})
        },
    },
  
    mounted(){
        if (localStorage.length == 0){
            localStorage.setItem('name',"");
            localStorage.setItem('email',"");
            localStorage.setItem('password',"");
        }
        let name = localStorage.getItem('name');
        let email = localStorage.getItem('email');
        let pass = localStorage.getItem('password');
        if (name == "" && email == "" && pass == ""){
            this.$router.push({name:"SignUp"})
        }
    }
}
</script>
