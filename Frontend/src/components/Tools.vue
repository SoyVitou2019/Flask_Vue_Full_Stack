<template>
    <div class="text-container p-4 bg-gray-100">
      <p></p>
    </div>
</template>
  


<script>
export default {
  data() {
    return {
      lines: ["Hello world", " This is a line of text ", " And another line of text"," Hi!"]
    }
  },
  methods: {
    writeText() {
  const textContainer = document.querySelector(".text-container p");
  let delay = 0;
  for (let i = 0; i < this.lines.length; i++) {
    const line = this.lines[i];
    for (let j = 0; j < line.length; j++) {
      setTimeout(() => {
        textContainer.innerHTML += line[j];
      }, delay);
     
      delay += 50;
    }
    // add a line break after each line except the last one
    if (i < this.lines.length - 1) {
      textContainer.innerHTML += "<br>";
    }
    console.log(textContainer)
  }
}
  },
  mounted() {
    this.writeText()
  }
}
</script>
