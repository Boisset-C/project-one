<template>
<div class="button">
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :class="mode" :to="to">
    <slot></slot>
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    mode: { // two types of style set for button styles
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean, // if its link the appropriate slot will be used
      required: false,
      default: false, // prevents default value of link
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #00F7FF;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #00F7FF;
  border: none;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #FF0800;
}
</style>