<template>
    <div>
        <div>
            <h1>Checking if the plugin is registered</h1>
            <p v-setRedColor>Should be red</p>
            <p>Should not be null : {{!!$http.get}}</p>
            <p>Should not be null : {{!!debounce}}</p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'Plugin',
  data() {
    return {
      debounce: Vue.debounce,
    };
  },
};
</script>
