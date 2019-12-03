<template>
    <div>
        <h1 v-if="titleIsDisplayed">With Logging component</h1>
        <button @click="toggleTitleIsDisplayed()">Title Displayed : {{titleIsDisplayed}}</button>
    </div>

</template>

<script>
import {titleDisplay} from './Mixins';

export default {
  name: 'WithLoggingMixin',
  mixins: [titleDisplay],
  methods: {
    log(value) {
      console.log('LOG::', value);
    },
  },
};
</script>

<style scoped>
</style>
