<template>
    <div>
        <h1 v-if="titleIsDisplayed">A component</h1>
        <button @click="toggleTitleIsDisplayed()">Title Displayed : {{titleIsDisplayed}}</button>
    </div>

</template>

<script>
export default {
  name: 'WithoutLogging',
  data() {
    return {
      titleIsDisplayed: true,
    };
  },
  methods: {
    toggleTitleIsDisplayed() {
      this.titleIsDisplayed = !this.titleIsDisplayed;
    },
  },
};
</script>

<style scoped>
</style>
