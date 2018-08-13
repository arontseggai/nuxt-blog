<template>
  <div class="home-page container">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
  import PostList from '~/components/Posts/PostList'
  export default {
    components: {
      PostList
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    },
    created() {
      console.log(this.$store)
    }
  }
</script>