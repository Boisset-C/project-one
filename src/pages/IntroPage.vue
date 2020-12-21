<template>
<base-card>
    <ul>
       <li>
       <base-button mode="outline" link to="/settings">SETTINGS</base-button>
      </li>
       <li>
       <base-button mode="outline" link to="/createUser">NEW GAME</base-button>
      </li>
     <li>
       <base-button mode="outline" link to="/introPage">CONTINUE</base-button>
      </li> 
   </ul>
</base-card>
</template>

<style scoped>
ul{
  background-image: url('~@/assets/introBackground.jpeg');
  display:flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  list-style-type:none;
  height: 80vh;

}
ul li{
  display: list-item;
  padding: 5px 10px;
  color:white;
  margin: 0 3px;
}
</style>

