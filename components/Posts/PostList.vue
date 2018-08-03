<template>
    <section class="post-list">
        <div class="row">
          <PostPreview
            v-for="post in posts"
            :is-admin="isAdmin"
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :previewText="post.previewText">
          </PostPreview>    
        </div>
    </section>    
</template>

<script>

import PostPreview from '~/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },  
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>