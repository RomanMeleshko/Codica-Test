<template>
  <div id="app">
     <div class="container-fluid">
        <div class="container-wrapper">
           <div class="container-wrapper-header">
              <header>
                 <Header></Header>

              </header>
           </div>

        <div class="content-wrapper">
           <div class="contant">
              <div class="row">
                <Home></Home>

              </div>
           </div>
          </div>
        </div>

        <div class="content-wrapper-footer">
           <footer>
              <Footer></Footer>

           </footer>
        </div>


    </div>

<!--      <fish-button loading type="positive">Loading</fish-button>-->
<!--      <fish-button loading type="primary">Loading</fish-button>-->

  </div>
</template>


<script>
  import "bootstrap/js/dist/util";
  import Header from "@/components/Header/Header.vue";
  import Footer from "@/components/Footer/Footer.vue";
  import Home from "@/views/Home.vue";

  export default {
    name: 'App',
    data() {
      return {

      }
    },
    components: {
      Header,
      Footer,
      Home
    }
  }
</script>



<style>
 @import "css/app.css";

</style>
