<template>
    <div>
            I don't render the data, you choose.
            I'm some default content:
            <pre>{{response}}</pre>
    </div>
</template>

<script>

export default {
  name: 'GithubUser',
  data() {
    return {
      response: {},
    };
  },
  watch: {
  },
};
</script>
