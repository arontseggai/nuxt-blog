<template>
    <div class="posts-page container">
        <h1>THis is the posts page</h1>
        <PostList/>
    </div>
</template>

<script>
    import PostList from '~/components/Posts/PostList'

    export default {
        components: {
            PostList
        }
    }
</script>