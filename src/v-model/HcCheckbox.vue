<template>
    <div>
        <input
                type="checkbox"
                ref="myCheckbox"
                :checked="!checked"
                @change="change()">
    </div>

</template>

<script>
export default {
  name: 'HcCheckboxInverse',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: ['checked'],
  methods: {
    change() {
      this.$emit('change', !this.$refs.myCheckbox.checked);
    },
  },
};
</script>

<style scoped>
</style>
