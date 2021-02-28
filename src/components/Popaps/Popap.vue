<template>
  <div class="popap" v-on:click="closePopap" v-if="seen">
     <div class="wrapper-popap">
        <div class="popap-block">
          <h6>Дополнительная информация</h6>
          <div class="popap-block__name-city pt-2">
            <span>Город: </span><span><b>{{ name }}</b></span>
          </div>
          <div class="popap-block__temp mt-2">
            <span>Темп.Max: </span><span><b>{{ temp_max }}</b> </span>&#176;
            <span>Темп.Min: </span><span><b>{{ temp_min }}</b> </span>&#176;
          </div>
          <div class="popap-block__humidity mt-2">
            <span>Влажность: </span><span><b>{{ humidity }}</b></span>
          </div>
          <div class="popap-block__pressure mt-2">
            <span>Давление: </span><span><b>{{ pressure }}</b></span>
          </div>
          <div class="popap-block__visibility mt-2">
            <span>Видимость: </span><span><b>{{ visibility }}</b></span>
          </div>
          <div class="popap-block__wind mt-2">
            <span>Поворот ветра: </span><span><b>{{ wind_deg }}</b></span>
          </div>
          <div class="popap-block__wind mt-2">
            <span>Скрорость ветра: </span><span><b>{{ wind_speed }}</b></span>
          </div>
        </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'Popap',
  data() {
    return {
      seen: true,
      title: "",
      name: "",
      temp_max: "",
      temp_min: "",
      humidity: "",
      pressure: "",
      visibility: "",
      wind_deg: "",
      wind_speed: ""
    }
  },

  methods: {

    closePopap() {
      alert("test");
    }

  }

}
</script>

<style scoped>
.popap {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(10, 5, 4, 0.5);
  position: absolute;
}

.popap-block {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  font-size: 18px;
  background: green;
  position: absolute;
}
.popap-block > div {
  margin-bottom: 20px;
}
</style>