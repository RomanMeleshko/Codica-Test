<template>
  <div class="container-fluid">
     <div class="about">
        <div class="about-wrapper">
           <div class="row justify-content-center">
              <div class="col-4 border text-left">
                 <div class="about__additional-info mt-4">
                    <h3>Дополнительная информация на странице Aboute</h3>
                  <div class="header-block__name-city pt-2">
                   <span>Город: </span><span><b>{{ pullCity.name }}</b></span>
                  </div>
                  <div class="about__temp mt-3">
                   <span>Темп.Max: </span><span><b>{{  Math.round( pullCity.main.temp_max - 273 ) }}</b> </span>&#176;
                   <span>Темп.Min: </span><span><b>{{  Math.round( pullCity.main.temp_min - 273 ) }}</b> </span>&#176;
                  </div>
                  <div class="about__humidity mt-3">
                   <span>Влажность: </span><span><b>{{ Math.round(pullCity.main.pressure * 0.00750063755419211*100 ) + " мм.р.с" }}</b></span>
                  </div>
                  <div class="about__pressure mt-3">
                   <span>Давление: </span><span><b>{{ pullCity.main.humidity + "%" }}</b></span>
                  </div>
                  <div class="about__visibility mt-3">
                   <span>Видимость: </span><span><b>{{ pullCity.visibility/1000 + "км" }}</b></span>
                  </div>
                  <div class="about__wind mt-3">
                   <span>Поворот ветра: </span><span><b>{{ pullCity.wind.deg }}</b></span>
                   <p class="mt-3 mb-3">
                     <span>Скрорость ветра: </span><span><b>{{ pullCity.wind.speed + "м/с" }}</b></span>
                   </p>
                   </div>
                 </div>
              </div>
           </div>
       </div>
     </div>
  </div>
</template>


<script>
import {mapGetters} from "vuex";

export default {
  name: 'About',
  data: function () {
    return {

    }
  },

  computed: mapGetters(["pullCity"]),

}

</script>

<style scoped>
span {
  font-size: 18px;
}
.about__temp span:nth-child(2) {
  color: red;
}
.about__temp span:nth-child(4) {
  color: blue;
}

</style>