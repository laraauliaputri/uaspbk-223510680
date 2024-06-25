<template>
    <div class="weather-widget">
      <q-card class="q-pa-sm glass-card weather-card bg-gradient" :style="{ height: cardHeight }">
        <q-card-section class="weather-widget-header">
          <h2>Weather Widget</h2>
        </q-card-section>
  
        <q-card-section>
          <q-input
            v-model="location"
            outlined
            placeholder="Enter location"
            class="input-field"
            @keyup.enter="fetchWeather"
            
          >
            <template v-slot:append>
              <q-btn
                label="Search"
                color="Lavender"
                icon="search"
                @click="fetchWeather"
                text-color="pink"
              />
            </template>
          </q-input>
        </q-card-section>
  
        <q-card-section v-if="loading" class="loading-info">
          <div class="text-center text-black">
            <strong>Loading data...</strong>
          </div>
        </q-card-section>
  
        <q-card-section v-if="weather && !loading" class="weather-info">
          <div class="weather-grid">
            <div class="weather-item">
              <strong>📍 Location:</strong><br>{{ weather.name }}
            </div>
            <div class="weather-item">
              <strong>🌡 Temperature:</strong><br>{{ weather.main.temp }}°C
            </div>
            <div class="weather-item">
              <strong>💨 Wind:</strong><br>{{ weather.wind.speed }} m/s, {{ getWindDirection(weather.wind.deg) }}
            </div>
            <div class="weather-item">
              <strong>🌤️ Description:</strong><br>{{ weather.weather[0].description }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  import { ref, watch, onMounted } from "vue";
  import axios from "axios";
  
  export default {
    name: "WeatherWidget",
    setup() {
      const location = ref("");
      const weather = ref(null);
      const loading = ref(false);
      const apiKey = "8a7436bc7a340da337b17310ea4fd29a";
      const cardHeight = ref("auto"); // Tinggi awal card bisa diatur secara dinamis
  
      const fetchWeather = async () => {
        if (location.value) {
          loading.value = true;
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=metric`;
          try {
            const response = await axios.get(apiUrl);
            weather.value = response.data;
          } catch (error) {
            console.error("Error fetching weather data:", error);
            weather.value = null;
          } finally {
            loading.value = false;
            updateCardHeight(); // Memanggil fungsi untuk memperbarui tinggi card setelah data dimuat
          }
        }
      };
  
      const temperatureClass = ref("");
  
      watch(weather, (newVal) => {
        if (newVal && newVal.main.temp) {
          const temp = newVal.main.temp;
          if (temp > 30) {
            temperatureClass.value = "text-red";
          } else if (temp >= 25 && temp <= 30) {
            temperatureClass.value = "text-yellow";
          } else {
            temperatureClass.value = "text-green";
          }
        }
      });
  
      function getWindDirection(deg) {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round((deg % 360) / 45);
        return directions[index];
      }
  
      function updateCardHeight() {
        // Mengatur tinggi card berdasarkan konten
        if (weather.value && !loading.value) {
          cardHeight.value = "auto"; // Atur tinggi menjadi otomatis setelah data dimuat
        } else {
          cardHeight.value = "250px"; // Atur tinggi card ketika sedang loading atau tidak ada data
        }
      }
  
      onMounted(() => {
        fetchWeather();
      });
  
      return {
        location,
        weather,
        loading,
        fetchWeather,
        temperatureClass,
        getWindDirection,
        cardHeight
      };
    },
  };
  </script>
  
  <style scoped>
  .weather-widget {
    max-width: 600px; /* Menyesuaikan lebar maksimum widget */
    margin: 0 auto;
  }
  
  .weather-widget-header {
    background: linear-gradient(135deg, #ffb6c1, #87ceeb, #d8bfd8, #fffdd0, #b0e0e6);
    padding: 15px;
    text-align: center;
    margin-bottom: 15px;
    color: white;
    font-size: 1.2em;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  }
  
  .weather-card {
    background-color: rgba(255, 105, 180, 0.2); /* Pink campur biru dengan opacity */
    backdrop-filter: blur(8px);
    border-radius: 50px; /* Mengubah sudut menjadi bulat */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .weather-info {
    margin-top: 15px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .weather-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Menyesuaikan grid dengan auto-fit */
    gap: 15px; /* Jarak antar grid item */
  }
  
  .weather-item {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1); /* Warna latar belakang grid item */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .weather-location,
  .weather-temp,
  .weather-wind,
  .weather-desc {
    margin-bottom: 8px;
  }
  
  .loading-info {
    margin-top: 15px;
  }
  
  .text-red {
    color: red;
  }
  
  .text-yellow {
    color: yellow;
  }
  
  .text-green {
    color: green;
  }
  </style>
  