<template>
  <div>
    <p v-hc-hidden="true">Hide me</p>
    <button v-hc-click-outside="clickOutside">click outside button</button>
  </div>
</template>

<script>
export default {
  name: 'CustomDirective',
  methods: {
    clickOutside() {
      console.log('click outside');
    },
  },
};
</script>
