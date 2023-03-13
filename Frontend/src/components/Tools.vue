<template>
  <div class="bg-black">
    <textarea v-model="textinput" id="message" class=" mt-12 mx-20 px-4 mb-10 w-96" placeholder="Leave a comment..."></textarea>
    <button type="submit" v-on:click="writeText()" class=" mb-24 py-4 px-5 text-sm font-medium text-center text-white bg-slate-400 hover:bg-slate-300 rounded-lg shadow-lg shadow-indigo-500/40">Send message</button>
    <div class="text-container p-4 bg-gray-100">
      <p></p>
    </div>
  </div>
</template>
  


<script>
export default {
  data() {
    return {
      textinput: "",
    };
  },
  methods: {
    writeText() {
      const textContainer = document.querySelector(".text-container p");
      let delay = 0;
      let number = 1;
      let countx = false;
      let x = 0;
      const line = this.textinput;
      console.log(line.length)
      for (let j = 0; j < line.length; j++) {
        let temp = line.slice(j, j + 4);
        if(delay == 0){
          textContainer.innerHTML += `${number} , `;
        }
        setTimeout(() => {
          // add a line break after each line except the last one
          if (temp.toLowerCase() === "<br>".toLowerCase() && j < line.length - 5) {
            number++;
            textContainer.innerHTML += temp;
            textContainer.innerHTML += `${number} , `;
            countx = true;
          }
          if (countx == false) {
            if(line[j] != " "){
              textContainer.innerHTML += line[j];
            }else{
              textContainer.innerHTML += "&nbsp;";
            }
            
          }
          if (countx) {
            x++;
            if (x >= 4) {
              x = 0;
              countx = false;
            }
          }
        }, delay);
        delay += 50;
      }
    },
  },
};
</script>

<style scoped>
textarea{
  resize: both;
}
</style>
