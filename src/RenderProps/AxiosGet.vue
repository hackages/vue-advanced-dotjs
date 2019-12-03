<template>
    <div>
        <slot name="response" :value="response">
            I don't render the data, you choose.
            I'm some default content:
            <pre>{{response}}</pre>
        </slot>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AxiosGet',
  props: ['url', 'options'],
  data() {
    return {
      response: {},
    };
  },
  created() {
    this.execute(this.url, this.options);
  },
  methods: {
    async execute(url, options) {
      try {
        this.response = (await axios.get(url, options)).data;
        console.log('data', this.response);
      } catch (e) {
        this.response = {};
        console.error(e);
      }
    },
  },
  watch: {
    url: {

      async handler(value) {
        await this.execute(value, this.options);
      },
    },
    options: {
      async handler(value) {
        await this.execute(this.url, value);
      },
    },
  },
};
</script>
