<template>
  <base-card>
    <section>
  <ul>LIST OF CHARACTERS</ul>
    <base-button mode="outline" link to="/levelOne">START GAME</base-button>
    </section>
  </base-card>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
  computed: { 
  listedCharacters() {
    return this.$store.getters.characters;
    },
   },
  };
</script>
