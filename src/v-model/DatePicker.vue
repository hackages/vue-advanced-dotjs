<template>
    <div>
        Day: <input type="number" ref="dayRef" :value="value.day" @input="updateDate()"/>
        Month: <input type="number" ref="monthRef" :value="value.month" @input="updateDate()"/>
        Year: <input type="number" ref="yearRef" :value="value.year" @input="updateDate()"/>
    </div>
</template>

<script>
export default {
  name: 'DatePicker',
  props: ['value'],
  methods: {
    updateDate() {
      this.$emit('input', {
        day: +this.$refs.dayRef.value,
        month: +this.$refs.monthRef.value,
        year: +this.$refs.yearRef.value,
      });
    },
  },
};
</script>
