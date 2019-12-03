<template>
    <div>
        <div>
            <date-picker v-model="datePicker"></date-picker>
            <pre>{{JSON.stringify(datePicker, null , 1)}}</pre>
        </div>
        <hr>
        <div>
            WTF checkbox
            <hc-checkbox-inverse v-model="check"></hc-checkbox-inverse>
            <pre>Value:{{check}}</pre>
        </div>
    </div>
</template>

<script>
import HcCheckboxInverse from './HcCheckbox';
import DatePicker from './DatePicker';

export default {
  name: 'Model',
  components: {HcCheckboxInverse, DatePicker},
  data() {
    return {
      datePicker: {},
      check: false,
    };
  },
};
</script>

<style scoped>
</style>
