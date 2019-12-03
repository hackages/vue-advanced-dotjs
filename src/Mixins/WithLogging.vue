<template>
    <div>
        <h1 v-if="titleIsDisplayed">With Logging component</h1>
        <button @click="toggleTitleIsDisplayed()">Title Displayed : {{titleIsDisplayed}}</button>
    </div>

</template>

<script>
export default {
  name: 'WithLogging',
  data() {
    return {
      titleIsDisplayed: true,
    };
  },
  methods: {
    toggleTitleIsDisplayed() {
      this.titleIsDisplayed = !this.titleIsDisplayed;
      this.log(this.titleIsDisplayed);
    },
    log(value) {
      console.log('LOG::', value);
    },
  },
};
</script>

<style scoped>
</style>
