<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col
          ><div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <transition name="fade">
                <b-jumbotron v-if="show">
                  <template #lead>
                    <vue-typer
                      :text="introMsg"
                      :repeat="0"
                      :shuffle="false"
                      initial-action="typing"
                      :pre-type-delay="70"
                      :type-delay="70"
                      :pre-erase-delay="1000"
                      :erase-delay="200"
                      erase-style="backspace"
                      :erase-on-complete="false"
                      caret-animation="phase"
                    ></vue-typer>
                  </template>

                  <div class="md-form">
                    <textarea
                      v-show="a"
                      id="initialThought"
                      class="md-textarea form-control"
                      rows="3"
                      v-model="currentThought"
                    >
                    </textarea>
                    <div class="md-form">
                      <vue-typer
                        v-show="!a"
                        :text="letItGo"
                        :repeat="0"
                        :shuffle="false"
                        initial-action="typing"
                        :pre-type-delay="1500"
                        :type-delay="70"
                        :pre-erase-delay="13000"
                        :erase-delay="200"
                        erase-style="backspace"
                        :erase-on-complete="true"
                        caret-animation="phase"
                        @completed="reloadPage"
                      ></vue-typer>
                    </div>

                    <label for="initialThought"></label>
                  </div>

                  <b-button variant="primary" href="" v-on:click="clearForm"
                    >Watch it go away</b-button
                  >
                </b-jumbotron>
              </transition>
            </div>
          </div></b-col
        >
      </b-row>
      <div class="footer">
        <div class="h2 mb-0">
          <a href="https://www.linkedin.com/in/hirepaydro/">
            <b-icon icon="linkedin" shift-h="-1"> </b-icon
          ></a>
          <a href="https://github.com/pedronotpaydro">
            <b-icon icon="github" shift-h="1"></b-icon>
          </a>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      letItGo: ".",
      currentThought: "",
      introMsg: ["What's bothering you?"],
      afterSubmitMsg: [
        "You are not these thoughts",
        "Just breathe",
        "and",
        "watch it go away",
      ],
      a: true,
      show: true,
    };
  },
  methods: {
    clearForm: function() {
      this.letItGo = this.currentThought;
      this.currentThought = "";
      this.a = false;
      this.introMsg = this.afterSubmitMsg;
    },
    reloadPage() {
      if (this.a == false) {
        // setTimeout(window.location.reload(), 5000);
        this.show = false;

        setTimeout(function() {
          window.location.reload();
        }, 2500);
      }
    },
  },
  created: function() {
    console.log(this.letItGo, this.currentThought);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body {
  background: url("../src/assets/clouds.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  height: 100%;
}
html {
  height: 100%;
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  position: absolute;
  bottom: 10px;
}
</style>
