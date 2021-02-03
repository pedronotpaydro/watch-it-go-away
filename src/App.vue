<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col
          ><div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <b-jumbotron>
                <template #lead>
                  What is bothering you?
                </template>

                <div class="md-form">
                  <textarea
                    id="form7"
                    class="md-textarea form-control"
                    rows="3"
                    v-model="letItGo"
                  ></textarea>
                  <label for="form7"></label>
                </div>

                <b-button variant="primary" href="" v-on:click="clearForm"
                  >Watch it go away</b-button
                >
              </b-jumbotron>
            </div>
          </div></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      letItGo: "",
    };
  },
  methods: {
    clearForm: function() {
      this.letItGo = "";
    },
  },
};
</script>

<style>
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
</style>
