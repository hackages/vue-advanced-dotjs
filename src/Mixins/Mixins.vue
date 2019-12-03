<template>
    <div>
        <with-logging></with-logging>
        <without-logging></without-logging>
        <hr>
    </div>
</template>

<script>
import WithLogging from './WithLogging';
import WithoutLogging from './WithoutLogging';

export default {
  name: 'Mixins',
  components: {
    WithoutLogging,
    WithLogging,
  },
};
</script>

<style scoped>
</style>
