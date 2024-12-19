<template>
  <div id="app">
    <HeaderComponent />
    <div class="main-layout">
      <SidebarComponent />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import SidebarComponent from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  width: 500vh;
}

.main-layout {
  display: flex;
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background: #333;
  color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  margin-left: 250px; /* Adjust based on sidebar width */
}

@media (max-width: 1024px) { /* Adjusted breakpoint for wider screens */
  .sidebar {
    width: 100%;
    height: auto;
    position: static;
    box-shadow: none;
  }

  .content {
    margin-left: 0;
    padding: 10px;
  }
}
</style>
