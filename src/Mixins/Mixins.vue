<template>
    <div>
        <!--<with-logging></with-logging>-->
        <!--<without-logging></without-logging>-->
        <hr>
        <with-logging-mixin></with-logging-mixin>
        <without-logging-mixin></without-logging-mixin>
    </div>
</template>

<script>
import WithLoggingMixin from './WithLoggingMixin';
import WithoutLoggingMixin from './WithoutLoggingMixin';
import WithLogging from './WithLogging';
import WithoutLogging from './WithoutLogging';

export default {
  name: 'Mixins',
  components: {
    WithoutLoggingMixin,
    WithLoggingMixin,
    WithoutLogging,
    WithLogging,
  },
};
</script>

<style scoped>
</style>
