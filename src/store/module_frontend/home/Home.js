//import axios from "axios";

export default {
    state: {
        result_cities: [],
        city: null
    },
    actions: {

        infoWeather: async function (context) {
            let key = "cdadd613c8d4235e8a72fca5c38c7009";
            let cities = ["Kiev", "Odessa", "Lviv", "Kharkiv"]; // default statick value of the city at the Home Page
            let data_city;
            let city;
            let arr = [];

            function getCookie(name) {
                let matches = document.cookie.match(new RegExp(
                    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            }

            cities.push(getCookie("city")); // add custom citys

            for (var i = 0; i < cities.length; i++) {
                data_city = await fetch(
                    "http://api.openweathermap.org/data/2.5/weather?q=" + cities[i] + "&appid=" + key
                )

                city = await data_city.json();

                arr.push(city);
            }

            context.commit("updateCity", arr);

        },
         infoCity: async function(context, city) {
            let key = "cdadd613c8d4235e8a72fca5c38c7009";
            let _city;

            document.cookie = encodeURIComponent("city") + '=' + encodeURIComponent(city);

            let data = await fetch(
                "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key
            )

            _city = await data.json();

            context.commit("createNewCity", _city);

        },

        updateCart: async function(context, city) {

            let key = "cdadd613c8d4235e8a72fca5c38c7009";
            let updated_city;
          //  console.log( city );
            let data = await fetch(
                "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key
            )

            updated_city = await data.json();

            context.commit("updateCart", updated_city);
        }


    },
    mutations: {
        updateCity(state, arr) {
            state.result_cities = arr;
        },
        createNewCity(state, city) {
            state.result_cities.push(city);
        },
        deleteCity(state, city) {
            state.result_cities = state.result_cities.filter(function(elem) {
                if(elem.name !== city) {
                    return true;
                }
                return false;
            })
        },
        updateCart(state, updated_city) {

            for(var i = 0; i < state.result_cities.length; i++) {
                if(state.result_cities[i].name == updated_city.name) {
                    state.result_cities[i].main.temp = updated_city.main.temp;
                    state.result_cities[i].weather[0].main = updated_city.weather[0].main;

                }
            }

        },
        getCity(state, obj) {
            state.city = obj;

        }
    },
    getters: {
        pullState(state) {
            return state.result_cities;
        },
        pullCity(state) {
            return state.city;
        }
    }
}