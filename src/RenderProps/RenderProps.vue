<template>
    <div>
        <div>
            <h1>Github User</h1>
            Username ({{username}}) : <input type="text" v-model="username"/>
            <!--Use here github-user-->
        </div>
        <hr/>
        <div>
            <h1>Axios Get</h1>
            <!--Use here axios-get-->
        </div>
    </div>
</template>

<script>
import AxiosGet from './AxiosGet';
import GithubUser from './GithubUser';

export default {
  name: 'RenderProps',
  components: {AxiosGet, GithubUser},
  data() {
    return {
      username: 'octocat',
      url: `https://api.github.com/users/b-barry`,
      options: {},
    };
  },
};
</script>

<style scoped>
</style>
