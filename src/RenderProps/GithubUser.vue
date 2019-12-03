<template>
    <div>
        <slot name="response" :value="response" >
            I don't render the data, you choose.
            I'm some default content:
            <pre>{{response}}</pre>
        </slot>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GithubUser',
  props: ['username'],
  data() {
    return {
      response: {},
    };
  },
  watch: {
    username: {
      immediate: true,
      async handler(value) {
        try {
          this.response = (await axios.get(
            `https://api.github.com/users/${value}`
          )).data;
          console.log('data', this.response);
        } catch (e) {
          this.response = {};
          console.error(e);
        }
      },
    },
  },
};
</script>
