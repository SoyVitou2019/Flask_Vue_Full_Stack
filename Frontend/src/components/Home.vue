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
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Home</a>
                                    <!-- button Category -->
                                    <div class="relative">
                                        <!-- Dropdown toggle button -->
                                        <button type="button" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                            Category
                                        </button>
                                        <!-- Dropdown menu -->
                                        <div class="hidden absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="menu-button" role="menu">
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
                                        </div>
                                    </div>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Materials</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">About</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Mobile menu -->
                <div class="sm:hidden bg-white" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
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
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium">Contact</a>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Text between webpack -->
        <div class="bg-green-100 w-auto h-72 flex justify-center">
           <div class="flex flex-col text-center justify-center space-y-7">
                <logo class=" text-sm sm:text-4xl md:text-lg lg:text-5xl">E-Learning Club's Pro Vitou</logo>
                <div class="flex flex-col">
                    <logo class=" text-sm sm:text-base md:text-lg lg:text-2xl">Click on the Images below to View My Crushs !</logo>
                    <logo class=" text-sm sm:text-base md:text-lg lg:text-2xl">The journey of a thousand miles begins with a single step. As like As me love you.</logo>
                </div>
           </div>
        </div>

        <div class="container_main">
            <div class="container">
                <div>
                    <div class="box">
                        
                    </div>
                    <div class="my-5 grid grid-rows-1">
                        <text>AIRLINE INDUSTRY</text>
                        <text1>CLICK TO LAUNCH</text1>
                    </div>
                </div>
                <div>
                    <div class="box">
                        
                    </div>
                    <div class="my-5 grid grid-rows-1">
                        <text>AIRLINE INDUSTRY</text>
                        <text1>CLICK TO LAUNCH</text1>
                    </div>
                </div>
                <div>
                    <div class="box">
                        
                    </div>
                    <div class="my-5 grid grid-rows-1">
                        <text>AIRLINE INDUSTRY</text>
                        <text1>CLICK TO LAUNCH</text1>
                    </div>
                </div>
            
            </div>
        </div>

        <div></div>
    </div>
</template>

<style scoped>
template{
    margin: 0;
    padding: 0%;
}

.container{
    display: flex;
    display: grid;
    margin: auto;
    margin-top: 60px;
    text-align: center;
    justify-content: space-between;
    width: 100vw;
    height: 50vh;
    grid-template-columns: 1fr 1fr 1fr;
    background: url();
}
.box{
    width: 250px;
    height: 150px;
    background: rgb(0, 0, 0);
    border-radius: 7px;
    margin: auto;
}
.box:hover{
    background-color: rgba(0, 0, 0, 0.81);
    cursor: pointer;
}
@media screen and (max-width: 900px){
    .container{
    grid-template-columns: 1fr 1fr;
}
}
@media screen and (max-width: 500px){
    .container{
    grid-template-columns: 1fr ;
}
}

</style>
