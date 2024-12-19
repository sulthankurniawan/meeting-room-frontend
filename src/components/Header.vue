<template>
    <header class="header">
        <img src="/Logo-FTL-no-tagline.png" alt="App Logo" class="logo" />
        <h1>iMeeting</h1>
        <nav class="navbar">
            <ul class="nav-list">
                <li><router-link to="/">Dashboard</router-link></li>
                <li><router-link to="/input-form">Input Form</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
.header {
    background: linear-gradient(45deg, #0f1212, #296377);
    color: white;
    padding: 20px 40px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar {
    display: flex;
    align-items: center;
}

.nav-list {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 15px;
}

.nav-list li {
    margin: 0;
}

.nav-list a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

.nav-list a:hover {
    color: #6a11cb;
    text-decoration: underline;
}

.logo {
    width: 100px;
    /* Adjust as needed */
    height: auto;
    /* Maintain aspect ratio */
}
</style>