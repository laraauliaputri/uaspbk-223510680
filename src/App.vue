<template>
  <div id="app" class="animated-background">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="header-background">
        <q-toolbar>
          <q-toolbar-title style="font-family: Arial, Helvetica, sans-serif, serif; color: #9c8d95; ">
            🌈Color Burst Weather 
          </q-toolbar-title>
          <div class="date-time-container">
            <div class="date-icon">
              <span class="day-of-week">{{ dayOfWeek }}</span> |
              <span class="full-date">{{ fullDate }}</span>
            </div>
            <div class="time">{{ currentTime }}</div>
          </div>
          <q-btn-dropdown flat class="tugas-dropdown">
            <template v-slot:label>
              TUGAS Lara Aulia Putri
            </template>
            <q-list>
              <q-item clickable v-ripple @click="navigateTo('Home')" class="item-home">
                <q-item-section>
                  <q-item-label class="center-text text-pink">Home</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="navigateTo('Task1')" class="item-task">
                <q-item-section>
                  <q-item-label class="center-text text-pink">Tugas Pertemuan 1</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="navigateTo('Task2')" class="item-task">
                <q-item-section>
                  <q-item-label class="center-text text-pink">Tugas Pertemuan 2</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="navigateTo('Task3')" class="item-task">
                <q-item-section>
                  <q-item-label class="center-text text-pink">Tugas Pertemuan 3</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="navigateTo('Task4')" class="item-task">
                <q-item-section>
                  <q-item-label class="center-text text-pink">Tugas Pertemuan 4</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="navigateTo('Task5')" class="item-task">
                <q-item-section>
                  <q-item-label class="center-text text-pink">Tugas Pertemuan 5</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="navigateTo('Task6')" class="item-task">
                <q-item-section>
                  <q-item-label class="center-text text-pink">Tugas Pertemuan 6</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentTime: '',
      dayOfWeek: '',
      fullDate: ''
    };
  },
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
    updateTime() {
      const now = new Date();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = daysOfWeek[now.getDay()];
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const fullDate = now.toLocaleDateString('en-US', options);
      const time = now.toLocaleTimeString('en-US');
      
      this.dayOfWeek = dayOfWeek;
      this.fullDate = fullDate;
      this.currentTime = time;
    }
  },
  created() {
    // Update time immediately
    this.updateTime();

    // Update time every second
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
}
</script>

<style scoped>
.text-pink {
  color: #FF1493; /* Warna pink menggunakan kode HEX */
}

.animated-background {
  background: linear-gradient(135deg, #89CFF0, #87ceeb, #d8bfd8, #fffdd0, #b0e0e6);
  background-size: 400% 400%;
  animation: gradientBackground 5s ease infinite;
}

.center-text {
  text-align: center;
}

.date-time-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.date-icon {
  font-size: 1.2em;
  margin-right: 5px;
}

.day-of-week {
  font-size: 0.9em;
  font-weight: bold;
  color: white;
}

.full-date {
  font-size: 0.9em;
  color: white;
}

.time {
  font-size: 0.9em;
  color: white;
  margin-right: 20px;
}

.tugas-dropdown {
  margin-left: auto;
}

.header-background {
  background: linear-gradient(135deg, #ffb6c1, #87ceeb);
}

.tugas-dropdown {
  margin-left: auto;
  background: linear-gradient(45deg, pink, #D8BFD8, #87ceeb, silver, pink);
}

.q-item {
  background-color: #89CFF0; /* Warna baby blue untuk card tugas lara aulia putri*/
}

@keyframes gradientBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
