<template>
<base-card>
    <ul>
     <li>
       <base-button mode="outline" link to="/createUser">NEW GAME</base-button>
      </li>
     <li>
       <base-button mode="outline" link to="/introPage">CONTINUE</base-button>
      </li>
     <li>
       <base-button mode="outline" link to="/settings">SETTINGS</base-button>
      </li>
   </ul>
   <base-card>
   
   </base-card>
</base-card>
</template>

<style scoped>
ul{
  list-style-type:none;
  display:flex;
  justify-content: center;

}
ul li{
  display: list-item;
  padding: 5px 10px;
  color:white;
  margin: 0 3px;
}
</style>

