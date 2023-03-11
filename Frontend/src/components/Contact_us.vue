<template>
    <section class="bg-gray-800 dark:bg-gray-900 h-screen">
        <router-link to="/" class="text-xl bg-lime-400 px-5 py-2 rounded-r-md hover:bg-lime-500">Go Home</router-link>
    <div class="self-center flex flex-col bg-gray-800 dark:bg-gray-900">
        <div class="flex flex-col w-auto mt-10">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact Us</h2>
            <p class=" mb-4 font-light text-center text-white dark:text-white sm:text-xl">Got a technical issue? Do you want to send feedback about a beta feature or something ...? </p>
            <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">Need details about our Business plan? Let us know.</p>
        </div>
        <form action="#" class="space-y-8 flex flex-col self-center">
            <div class="self-center">
                <label for="email" class=" block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light md:96" placeholder="name@flowbite.com" >
            </div>
            <div class="self-center">
                <label for="subject" class=" block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
                <input type="text" id="subject" class=" block p-3 w-72 text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you">
            </div>
            <div class="self-center">
                <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-3 w-72 text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class=" py-4 px-5 text-sm font-medium text-center text-white bg-slate-400 hover:bg-slate-300 rounded-lg shadow-lg shadow-indigo-500/40">Send message</button>
        </form>
    </div>
  </section>

</template>