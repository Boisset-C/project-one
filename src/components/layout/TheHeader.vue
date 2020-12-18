<template>
  <header>
      <nav>
        <h1><router-link to="/">TO THE ARENA</router-link></h1>
        <ul>
        <li><base-button mode="flat" link to="settings">settings</base-button></li>
        <li><base-button mode="flat" link to="/main menu">main menu</base-button></li>
        </ul>
      </nav>
  </header>
</template>

<style  scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #ff0800;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #00F7FF;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #91f3d2;
}

h1 {
  margin: 0;
}

h1 a {
  color: #00F7FF;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>