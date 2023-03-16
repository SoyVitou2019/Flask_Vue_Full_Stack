<template>
  <div class="fixed">
    <div :class="`${display}`" class="right-2">
      <div class="bg-red-900 text-black mt-20 py-4">
        <textarea v-model="textinput" id="message" class="textarea my-12 mx-20 px-6 h-screen pt-4"
          placeholder="Past your code here ...">
          </textarea>
      </div>
    </div>
    <div class="container">
      <div class="navbar">
        <div class="ide_logo"></div>
        <div class="text-info-file">
          @name_file -, @name_directory -, @name_IDE
        </div>
        <div class="container_right_option_icon">
          <!-- comments -->
          <i :class="`${on_bar}`" class="hover:bg-cyan-600 hover:rounded-lg hover:cursor-pointer"
            v-on:click="load_bar_side"></i>
          <i class="fa-sharp fa-solid fa-circle-check hover:bg-cyan-600 hover:rounded-lg hover:cursor-pointer"
            v-on:click="writeText()"></i>
          <i v-on:click="reset()" class="fa-solid fa-rotate-left hover:bg-cyan-600 hover:rounded-lg hover:cursor-pointer"></i>
          <i class="fa-solid fa-location-crosshairs"></i>
          <i class="fa-solid fa-user" v-on:click="route_home"></i>
        </div>
      </div>
      <div class="container_part">
        <div class="part hovertext2" data-hover="U:\IDE project\index.html">
          index.html
          <i class="fa-solid fa-xmark" data-hover="Close (Ctrl+F4)"></i>
        </div>
        <div class="part hovertext2" data-hover="U:\IDE project\style.css">
          style.css <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="container_main">
        <div class="activity_bar">
          <div class="top">
            <div class="icon hovertext" data-hover="Explorer(Ctrl+Shift+E)">
              <i class="fa-solid fa-file"></i>
            </div>
            <div class="icon hovertext" data-hover="Search(Ctrl+Shift+F)">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="icon hovertext" data-hover="Source Control(Ctrl+Shift+G)">
              <i class="fa-solid fa-code-branch"></i>
            </div>
            <div class="icon hovertext" data-hover="Run and Debug (Ctrl+Shift+P)">
              <i class="fa-solid fa-play"></i>
            </div>
            <div class="icon hovertext" data-hover="Slack (Ctrl+Shift+O)">
              <i class="fa-brands fa-slack"></i>
            </div>
            <div class="icon hovertext" data-hover="Docker (Ctrl+Shift+L)">
              <i class="fa-brands fa-docker"></i>
            </div>
            <div class="icon hovertext" data-hover="Remote (Ctrl+Shift+W)">
              <i class="fa-sharp fa-solid fa-laptop-file"></i>
            </div>
            <div class="icon hovertext" data-hover="Git (Ctrl+Shift+X)">
              <i class="fa-brands fa-gitkraken"></i>
            </div>
            <div class="icon hovertext" data-hover="Git (Ctrl+Shift+X)">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div class="botttom">
            <div class="icon hovertext" data-hover="Manage">
              <i class="fa-solid fa-gear"></i>
            </div>
          </div>
        </div>
        <div class="explorer">
          <div class="container_directory"></div>
          <div class="container_file">
            <div class="file1">
              <div class="folder_part">@Code_editor</div>
              <div class="option">
                <i class="fa-solid fa-file-medical"></i>
                <i class="fa-solid fa-folder-plus"></i>
                <i class="fa-solid fa-rotate-left"></i>
                <i class="fa-regular fa-square-caret-down"></i>
              </div>
            </div>
            <div class="file hovertext2" data-hover="U:\IDE project\index.html">
              index.html
            </div>
            <div class="file hovertext2" data-hover="U:\IDE project\style.css">
              style.css
            </div>
            <div class="file hovertext2" data-hover="U:\IDE project\main.js">
              main.js
            </div>
          </div>
        </div>
        <div id="script" class="text-container p-4 text-black overflow-y-auto">
          <p class="script5"></p>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer">
        <div class="left">
          <i class="fa-solid fa-bolt"></i>
          <i class="fa-solid fa-triangle-exclamation"></i>
          <i class="fa-solid fa-xmark"></i>
          <i class="fa-solid fa-bug-slash"></i>
        </div>
        <div class="right">
          <i class="fa-solid fa-fan"></i>
          <div class="text hovertext1" data-hover="Reader Optimized">
            Screen Reader Optimized
          </div>
          <div class="text hovertext1" data-hover="Select Identation">
            Spaces: 4
          </div>
          <div class="text hovertext1" data-hover="Select Encoding">UTF-8</div>
          <div class="text hovertext1" data-hover="Select Sequence">CRLF</div>
          <div class="text hovertext1" data-hover="Language Mode">CSS</div>
          <div class="text hovertext1" data-hover="Server">Go live</div>
          <i class="fa-solid fa-radio" style="margin-left: 10px"></i>
        </div>
      </div>
    </footer>

    <div class="sm:hidden font-bold">WERNING!</div>
    <form method="post" action="#" id="form">
      <input type="text" placeholder="Input code here!" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textinput: "",
      on_bar: "fa-sharp fa-solid fa-toggle-off",
      display: "hidden",
      bool: false,
      div:false,
      num : 0,
      doublequote: false,
    };
  },
  methods: {
    route_home() {
      this.$router.push({ name: "Home" });
    },
    reset(){
      window.location.reload();
    },
    load_bar_side() {
      this.bool = !this.bool;
      if (this.bool) {
        this.on_bar = "fa-sharp fa-solid fa-toggle-on";
        this.display = "absolute";
      }
      if (!this.bool) {
        this.on_bar = "fa-sharp fa-solid fa-toggle-off";
        this.display = "hidden";
      }
    },
    writeText() {
      const textContainer = document.querySelector(".text-container p");
      textContainer.innerHTML += `<span><br></span>`;
      let delay = 0;
      const line = this.textinput;
      let x = 0;
      for (let j = 0; j < line.length; j++) {
        if (delay == 0) {
          this.num++;
          textContainer.innerHTML += `<span class = "text-red-400">&nbsp;&nbsp;${this.num}</span> | `;
        }
        setTimeout(() => {
          // add a line break after each line except the last one
          if (line[j] == "\u000A") {
            this.num++;
            textContainer.innerHTML += `<span><br></span>`;
            if(this.num < 10){
              textContainer.innerHTML += `<span class = "text-red-400">&nbsp;&nbsp;${this.num}</span> | `;
            }else{
              textContainer.innerHTML += `<span class = "text-red-400">${this.num}</span> | `;
            }
          }
          if(j<line.length-3){
            if(line.slice(j,j+3) == "div"){
              x = 0;
              this.div = true;
            }
            // check if it's inside of doubleqoute change text's color.
            if(line[j]=="\""){
              this.doublequote = !this.doublequote;
            }
          }
          if (line[j] != " ") {
              // change color of div tag
              if(this.div){
                x++;
                textContainer.innerHTML += `<span class = "text-blue-600 font-bold">${line[j]}</span>`;
                if(x>2){
                  this.div = false;
                }
              }
              // change color text inside of double qoute
              else if(this.doublequote){
                textContainer.innerHTML += `<span class = "text-orange-600">${line[j]}</span>`;
                
              }
              // if it isn't our target display
              else if(!this.div){
                textContainer.innerHTML += line[j];
              }

          //  if it's space add space inner HTML text using entity ascii code 
          } else {
            textContainer.innerHTML += "&nbsp;";
          }
        }, delay);
        // transition 1 text in 50 milliseconds
        delay += 50;
      }
      
    },
  },
};
</script>
<style scoped>
.container {
  display: block;
}

.container .navbar {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1.5px 2px 0px;
  z-index: 2;
  position: sticky;
}

.container .navbar .ide_logo {
  background: url(../assets/images/IDE_icon.png);
  width: 30px;
  height: 30px;
  margin: auto 0px;
  background-position: center;
  background-size: cover;
  margin-left: 10px;
}

.container .navbar .container_right_option_icon {
  display: flex;
  margin-right: 20px;
}

.container .navbar .container_right_option_icon i {
  margin: auto 0px;
  display: flex;
  margin-left: 20px;
}

.container .navbar .text-info-file {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: medium;
  color: rgb(65, 0, 123);
  margin: auto 0px;
}

.container .navbar .container_right_option_icon .fa-user {
  font-size: large;
  padding: 8px;
  border-radius: 50%;
  background-color: rgb(255, 213, 0);
  transition: 0.2s;
}

.container .navbar .container_right_option_icon .fa-user:hover {
  cursor: pointer;
  background-color: rgba(255, 213, 0, 0.678);
}

.container_main {
  display: flex;
}

.activity_bar {
  display: block;
  position: sticky;
  width: 50px;
  height: 100vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 1;
}

.activity_bar .icon {
  border: solid 1px rgba(0, 0, 0, 0.062);
  height: 50px;
  display: flex;
}

.activity_bar .icon:active {
  color: rgb(254, 161, 0);
}

.activity_bar .icon:hover {
  border: solid 1px rgba(0, 0, 0, 0.158);
  background-color: rgba(0, 0, 0, 0.034);
  cursor: pointer;
}

.activity_bar .icon i {
  margin: auto;
}

.activity_bar .botttom .icon {
  position: absolute;
  bottom: 40px;
  height: 50px;
  width: 50px;
}

.hovertext {
  position: relative;
  border-bottom: 1px dotted black;
}

.hovertext:before {
  content: attr(data-hover);
  visibility: hidden;
  opacity: 0;
  width: auto;
  background-color: rgba(255, 255, 255, 0.978);
  color: #000000;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.325);
  padding: 5px 0;
  transition: opacity 0.4s ease-in-out;

  position: absolute;
  z-index: 1;
  left: 100%;
  top: 25%;
  max-width: 200px;
  font-size: small;
  padding-right: 5px;
  padding-left: 5px;
}

.hovertext:hover:before {
  opacity: 1;
  visibility: visible;
}

/* BOTTOM HOVER DATA TEXT  */
.hovertext1 {
  position: relative;
  border-bottom: 1px dotted black;
}

.hovertext1:before {
  content: attr(data-hover);
  visibility: hidden;
  opacity: 0;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.045);
  color: #000000;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.325);
  padding: 5px 0;
  transition: opacity 0.4s ease-in-out;

  position: absolute;
  z-index: 1;
  left: -50%;
  top: -150%;
  max-width: 200px;
  font-size: small;
  padding-right: 5px;
  padding-left: 5px;
}

.hovertext1:hover:before {
  opacity: 1;
  visibility: visible;
}

/* HOVER TEXT 2  */
.hovertext2 {
  position: relative;
  border-bottom: 1px dotted black;
}

.hovertext2:before {
  content: attr(data-hover);
  visibility: hidden;
  opacity: 0;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.045);
  color: #000000;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.325);
  padding: 5px 0;
  transition: opacity 0.4s ease-in-out;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 100%;
  font-size: small;
  padding-right: 5px;
  padding-left: 5px;
}

.hovertext2:hover:before {
  opacity: 1;
  visibility: visible;
}

.footer {
  width: 96.8vw;
  height: 20px;
  background-color: rgb(0, 162, 255);
  bottom: -37px;
  justify-content: space-between;
  margin-left: 50px;
  display: flex;
  position: absolute;
  padding-bottom: 100px;
}

.footer .left {
  display: flex;
  margin-left: 0px;
}

.footer .left i {
  margin: auto;
  margin-left: 20px;
}

.footer .right {
  display: flex;
  margin-right: 30px;
}

.footer .right i {
  display: flex;
  margin: auto;
}

.footer .right .text {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: small;
  margin-left: 10px;
}

.footer .right .text:hover {
  color: #530000a3;
  cursor: pointer;
}

.explorer {
  display: block;
  width: 15vw;
  height: 100vh;
  background-color: rgb(240, 240, 240);
  position: relative;
  border: 1px solid rgba(0, 38, 175, 0.038);
}

.explorer .container_file {
  display: block;
}

.explorer .container_file .file {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: medium;
  color: black;
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.033);
}

.explorer .container_file .file1 .option {
  display: flex;
}

.explorer .container_file .file1 .option i {
  margin-left: 5px;
}

.explorer .container_file .file1 .option i:hover {
  color: #e28800;
  cursor: pointer;
}

.explorer .container_file .file1 {
  width: 14vw;
  border: 1px solid rgba(0, 0, 0, 0.033);
  justify-content: space-between;
  display: flex;
  padding: 5px;
}

.explorer .container_file .file1 .folder_part {
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: small;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.explorer .container_file .file:hover {
  background-color: #00000008;
  cursor: pointer;
}

.container_part {
  display: flex;
  width: 100vw;
  position: fixed;
  height: 40px;
  margin-top: 0px;
  margin-left: 17vw;
  padding-left: 23px;
  background-color: rgb(244, 244, 244);
}

.container_part .part {
  width: auto;
  height: auto;
  padding: 1px 20px 1px 20px;
  margin: auto 0px;
  border: 1px solid rgba(0, 0, 0, 0.089);
}

.container_part .part i {
  margin-left: 10px;
  padding: 0px;
}

.container_part .part i:hover {
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.111);
}

.container_part .part:hover {
  background-color: rgba(0, 0, 0, 0.032);
  cursor: pointer;
}

.container_part .part:active {
  background-color: rgba(0, 0, 0, 0.107);
}

.werning {
  display: none;
  margin: auto;
  color: orange;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 10vw;
  text-align: center;
  margin-top: 50vh;
  transition: 1s ease-in-out;
}

@media screen and (max-width: 700px) {
  .container {
    display: none;
  }

  .footer {
    display: none;
  }

  .werning {
    display: block;
  }
}

#form {
  position: fixed;
  z-index: 10;
  width: 30vw;
  height: 100vh;
  background-color: #00000066;
  display: block;
  right: 0%;
  float: right;
  display: none;
}

.textarea {
  width: 40vw;
}

@media screen and (max-width: 700px) {
  .textarea {
    display: none;
  }
}

.script5 {
  white-space: nowrap;
  width: 80.8vw;
  height: 82vh;
  padding-bottom: 82vh;
  overflow: scroll;
  margin-top: 1px;
  text-align: left;
}

.script {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: auto;
  height: auto;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 7px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  cursor: pointer;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.218);
  cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  cursor: pointer;
}</style>