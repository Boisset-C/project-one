<template>
  <base-card>
    <form>
    <section>
  <ul>
    <li v-for="character in listedCharacters" :key="character.id">
      {{ character.name }}
      {{ character.image }}
    </li>
  </ul>
    <base-button mode="outline" link to="/levelOne">START GAME</base-button>
    </section>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
  computed: { 
  listedCharacters() {
    return this.$store.getters['characters/characters'];
    },
   },
  };
</script>

