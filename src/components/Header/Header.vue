<template>
  <div class="header">
     <div class="row">
        <div class="col-12">
           <nav class="navbar navbar-expand-lg navbar-light p-4">
             <a class="navbar-brand" href="#">
<!--            <img src="@/assets/logoCRM.gif" width="30" height="30" class="d-inline-block" alt="">-->
             <span class="ml-3 text-logo">Weather</span><span class="ml-2">Vue</span>
           </a>
           <div v-on:click="$emit('show-menu', show)" class="navbar-button text-center p-2">
             <i class="fas fa-align-justify"></i>

           </div>

             <router-link class="" to="/">
                <button class="header_button">home</button>
             </router-link>

          </nav>

        </div>
     </div>

  </div>
</template>


<script>
export default {
  name: 'HeaderNavBar',
  data() {
    return {
      show: true
    }
  }


}

</script>


<style scoped>
.row {
  background: rgb(213, 96, 1);
}
.text-logo {
  font-size: 21px;
  color: #fff;
}
.navbar-button i {
  font-size: 25px;
}
.navbar-button {
  width: 50px;
  display: none;
  border-radius: 4px;

}
.header_button {
  height: 50px;
  width: 100px;
  border: none;
  color: #333;
  outline: none;
  text-transform: uppercase;
  border-radius: 10px;
}
.header_button:hover {
  background: grey;
  color: #ffffff;
}
@media (max-width: 768px) {
  .navbar-button {
    display: block;
  }
}



</style>
