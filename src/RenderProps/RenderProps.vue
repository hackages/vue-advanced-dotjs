<template>
  <div>
    <div>
      <h1>Github User</h1>
      Username ({{ username }}) : <input type="text" v-model="username" />
      <github-user :username="username" v-slot:response="{value}">
        <div>
          <p>Username is {{ value.login }}</p>
          <img :src="value.avatar_url" />
        </div>
      </github-user>
    </div>
    <hr />
    <div>
      <h1>Axios Get</h1>
      <axios-get :url="url" :options="options"></axios-get>
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

<style scoped></style>
