<template>
    <div class="admin-page container">
        <section class="new-post">
            <button @click="goToNewPostPage" class="btn">Create Post</button>
        </section>
        <section class="existing-posts">
            <h1>Existing posts</h1>
            <PostList />
        </section>
    </div>
</template>

<style scoped>
    .admin-page {
        padding: 20px;
    }

    .new-post {
        text-align: center;
        border-bottom: 2px solid #ccc;
        padding-bottom: 10px;
    }

    .existing-posts h1 {
        text-align: center;
    }
</style>


<script>
    import PostList from '~/components/Posts/PostList'
    
    export default {
        components: {
            PostList
        },
        methods: {
            goToNewPostPage () {
                console.log('wefwefewfewf');
                this.$router.push('admin/new-post')
            }
        }
    }
</script>