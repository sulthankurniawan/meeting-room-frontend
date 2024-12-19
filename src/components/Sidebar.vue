<template>
    <aside class="sidebar">
      <ul class="nav-list">
        <li>
          <router-link to="/" :class="{ active: $route.path === '/' }">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/input-form" :class="{ active: $route.path === '/input-form' }">Input Form</router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background: #333;
    color: white;
    padding: 20px;
    position: fixed;
    height: 100vh;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-list li {
    margin: 10px 0;
  }
  
  .nav-list a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
  }
  
  .nav-list a:hover {
    background: #444;
    padding-left: 10px;
  }
  
  .nav-list a.active {
    background: #555;
    font-weight: bold;
    padding-left: 10px;
    border-left: 4px solid #6a11cb;
  }
  
  .nav-list a i {
    margin-right: 8px;
  }
  </style>
  