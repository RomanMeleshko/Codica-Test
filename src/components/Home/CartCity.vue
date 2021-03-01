<template>
  <div class="row mt-2">
     <div class="col-md-3 col-sm-6" v-for="item in arrResultFromData" :key="item.id">
        <div class="home-block__cart p-2 mt-1 mb-4" v-on:click="$emit('add_info', item)">
           <div class="home-block__close">
              <span class="rounded-circle"
                  v-on:click="$emit('remove-cart', item.name)"
              >X</span>
           </div>
        <div class="home-block__cart-city mt-4 text-center">
           <p>
             {{ item.name }}
           </p>
        </div>
        <div class="home-block__cart-temp">
            <span>
                {{ Math.round(item.main.temp - 273 )}}
            </span><b>&#176;</b>
        </div>
        <div class="header-block__cart-clouds">
           <p>
             {{ item.weather[0].main }}
           </p>
        </div>
        <div class="header-block__cart-button">
           <p>
              <button class="btn-update"
                    v-on:click="$emit('update-cart', item.name)"
              >Обновить</button>
           </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockAdditionalCity.vue",
  data() {
    return {

    }
  },
  props: ["arrResultFromData"],

  methods: {



  }

}
</script>

<style scoped>

.home-block__cart {
  font-family: Lato-Light;
}
.home-block__cart {
  border-radius: 15px;
  background: #fff;
  transition: 1s;
  box-shadow: 3px 4px 15px #333,
  inset 1px 1px 2px rgba(163, 163, 163, 0.87);
}
.home-block__cart:hover {
  top: -15px;
  position: relative;
  box-shadow: 5px 5px 30px #333;
}

.home-block__cart > div{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.home-block__cart-city > p {
  width: 100px;
  position: relative;
  box-shadow: 0px 10px 10px -10px #539da5;

}
.header-block__close-cart > span {
  position: relative;
}
.home-block__cart-temp > span {
  font-family: Hisqaida;
  font-size: 24px;
  color: #e58d2f;
}
.btn-update {
  outline: none;
  border: none;
  height: content-box;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  background: rgba(234, 210, 91, 0.99);

}
.header-block__cart-button {
  padding-top: 30px;
}
.home-block__close > span{
  width: 28px;
  height: 28px;
  color: red;
  font-weight: bold;
  text-align: center;
  border: 2px solid red;
}
.home-block__cart-city {
  font-size: 20px;
}
</style>