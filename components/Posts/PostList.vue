<template>
    <section class="post-list">
        <div class="row">
        <PostPreview v-for="post in posts" :key="post.id" :post="post"></PostPreview>    
        </div>
    </section>    
</template>

<script>

import PostPreview from '~/components/Posts/PostPreview'

export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'wfwewefwe'},
        {id: 2, title: 'wfwewefwe'},
        {id: 3, title: 'wfwewefwe'},
        {id: 4, title: 'wfwewefwe'},
        {id: 5, title: 'wfwewefwe'}
      ]
    }
  },
  components: {
    PostPreview
  }
}
</script>