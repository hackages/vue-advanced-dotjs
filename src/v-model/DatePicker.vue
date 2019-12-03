<template>
    <div>
        Day: <input type="number" />
        Month: <input type="number" />
        Year: <input type="number" />
    </div>
</template>

<script>
export default {
  name: 'DatePicker',
  methods: {
    updateDate() {
      // Implement the event to dispatch an object containing {day, month, year }
    },
  },
};
</script>
