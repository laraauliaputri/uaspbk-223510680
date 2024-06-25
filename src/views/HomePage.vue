<template>
  <div class="home-page">
    <h1 ref="title"></h1>
  </div>
  <div class="homepage">
    <Weather />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Weather from '../components/WeatherWidget.vue';

export default {
  name: 'HomePage',
  components: {
    Weather,
  },
  setup() {
    const title = ref(null);
    const fullText = 'Breezy Updates, Just for You!';

    onMounted(() => {
      let currentIndex = 0;
      title.value.innerHTML = '';

      const displayNextCharacter = () => {
        if (currentIndex < fullText.length) {
          title.value.innerHTML += fullText[currentIndex];
          currentIndex++;
          setTimeout(displayNextCharacter, 100);
        }
      };

      displayNextCharacter();
    });

    return {
      title,
    };
  },
};
</script>

<style>
.homepage {
  text-align: center;
}

.home-page h1 {
  font-size: 2em;
  margin: 20px;
  font-family: Castellar, serif; 
  white-space: pre; /* Mengatur agar spasi dan baris baru dapat ditampilkan */
  text-align: center;
  color: #9c8d95;  /* Warna font abu-abu gelap */
}
</style>
