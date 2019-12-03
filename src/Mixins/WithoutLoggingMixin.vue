<template>
    <div>
        <h1 v-if="titleIsDisplayed">A component</h1>
        <button @click="toggleTitleIsDisplayed()">Title Displayed : {{titleIsDisplayed}}</button>
    </div>

</template>

<script>
import {titleDisplay} from './Mixins';

export default {
  name: 'WithoutLoggingMixin',
  mixins: [titleDisplay],
};
</script>

<style scoped>
</style>
