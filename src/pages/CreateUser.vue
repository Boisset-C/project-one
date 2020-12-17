<template>
  <section>
<ul>LIST OF CHARACTERS</ul>
  <base-button mode="outline" link to="/levelOne">START GAME</base-button>
  </section>
</template>

<script>
export default {
  computed: { 
  listedCharacters() {
    return this.$store.getters.characters;
    },
   },
  };
</script>
