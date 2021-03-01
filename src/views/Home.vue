<template>
  <div class="container-fluid">
     <div class="cart-wrapper">
        <div class="home-block">

           <div class="row mt-3">
              <div class="col-md-4 order-sm-last">
                 <div class="home-block__search-city mt-2">
                 <div>
                <label for="city">Введите название города</label>
                </div>
                 <form @submit.prevent="submit">
                    <div class="row pl-3">
                       <div class="col-8 p-0">
                          <div class="form-group">
                             <input type="text" placeholder="город" v-model="title" class="form-control" id="city">
                          </div>
                       </div>
                       <div class="col-4 p-0">
                          <button type="submit" class="btn-ok rounded-circle p-2 ml-3">OK</button>
                       </div>
                    </div>
                 </form>
              </div>

              <div class="home-block__additional-info mt-4">
                <h6>Дополнительная информация</h6>
              <div class="header-block__name-city pt-2">
                <span>Город: </span><span><b>{{ name }}</b></span>
              </div>
              <div class="header-block__temp mt-2">
                <span>Темп.Max: </span><span><b>{{ temp_max }}</b> </span>&#176;
                <span>Темп.Min: </span><span><b>{{ temp_min }}</b> </span>&#176;
              </div>
              <div class="header-block__humidity mt-2">
                <span>Влажность: </span><span><b>{{ humidity }}</b></span>
              </div>
              <div class="home-block__pressure mt-2">
                <span>Давление: </span><span><b>{{ pressure }}</b></span>
              </div>
              <div class="header-block__visibility mt-2">
                <span>Видимость: </span><span><b>{{ visibility }}</b></span>
              </div>
              <div class="header-block__wind mt-2">
                 <span>Поворот ветра: </span><span><b>{{ wind_deg }}</b></span>
                  <p class="mt-2">
                    <span>Скрорость ветра: </span><span><b>{{ wind_speed }}</b></span>
                 </p>
              </div>
           </div>

            <router-link to="/info">
              <button class="button-info mt-3">Info city</button>
            </router-link>

        </div>

        <div class="col-md-8 order-sm-first">
           <div class="home-block__cards">

              <cartCity
                  v-bind:arrResultFromData="pullState"
                  v-on:remove-cart="removeCart"
                  v-on:update-cart="updateCity"
                  v-on:add_info="additionalInfoCity"
              />

           </div>
        </div>
       </div>
     </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import cartCity from "@/components/Home/CartCity.vue";
import { mapGetters, mapActions, mapMutations} from "vuex";

export default {
  name: 'Home',
  data() {
    return {
      title: "",
      name: localStorage.getItem('name'),
      temp_max: localStorage.getItem('temp_max'),
      temp_min: localStorage.getItem('temp_min'),
      humidity: localStorage.getItem('pressure'),
      pressure: localStorage.getItem('humidity'),
      visibility: localStorage.getItem('visibility'),
      wind_deg: localStorage.getItem('wind_deg'),
      wind_speed: localStorage.getItem('wind_speed')
    }
  },
  computed: mapGetters(["pullState"]),

  methods: {
    ...mapActions(["infoWeather", "infoCity", "updateCart"]),
    ...mapMutations(["createNewCity", "deleteCity", "getCity"]),

    removeCart(name) {
      this.deleteCity(name);
    },

    submit() {
      if(this.title !== "") {
        this.infoCity(this.title);
        this.title = "";
      }else {
        alert("Введите пожалуйста город");
      }
    },

    updateCity(name) {
      this.updateCart(name);

    },

    additionalInfoCity(obj) {

      this.getCity(obj);

      localStorage.setItem('name', obj.name);
      localStorage.setItem('temp_max', Math.round(obj.main.temp_max - 273 ));
      localStorage.setItem('temp_min', Math.round(obj.main.temp_min - 273 ));
      localStorage.setItem('pressure', Math.round(obj.main.pressure * 0.00750063755419211*100 ) + " мм.р.с");
      localStorage.setItem('humidity', obj.main.humidity + "%");
      localStorage.setItem('visibility', obj.visibility/1000 + "км");
      localStorage.setItem('wind_deg', obj.wind.deg);
      localStorage.setItem('wind_speed', obj.wind.speed + "м/с");

      this.name = obj.name;
      this.temp_max = Math.round(obj.main.temp_max - 273 );
      this.temp_min = Math.round(obj.main.temp_min - 273 );
      this.pressure = Math.round(obj.main.pressure * 0.00750063755419211*100 ) + " мм.р.с";
      this.humidity = obj.main.humidity + "%";
      this.visibility = obj.visibility/1000 + "км";
      this.wind_deg = obj.wind.deg;
      this.wind_speed = obj.wind.speed + "м/с";
    }


  },

  async mounted() {

    this.infoWeather();

  },

  components: {
    cartCity,
  }
}
</script>

<style scoped>
@import "../css/app.css";

.home-block__additional-info,
.home-block__search-city {
  font-family: Lato-Light;
}
.btn-ok {
  outline: none;
  border: none;
  font-weight: bold;
  background: rgba(234, 91, 203, 0.99);
  box-shadow: 0px 0px 12px #333,
  inset 0px 0px 3px #333;
}
.button-info {
  border: none;
  background: #de6731;
  color: #ffffff;
  width: 200px;
  padding: 3px;
  outline: none;
  border-radius: 9px;
}
.button-info:hover {
  background: grey;
}
</style>
