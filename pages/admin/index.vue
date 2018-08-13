<template>
    <div class="admin-page container">
        <section class="new-post">
            <button @click="this.$router.push('admin/new-post')" class="btn">Create Post</button>
            <button @click="onLogout" style="margin-left: 10px;" class="btn">Logout</button>
        </section>
        <section class="existing-posts">
            <h1>Existing posts</h1>
            <PostList isAdmin :posts="loadedPosts" />
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
        middleware: ['check-auth','auth'],
        methods: {
            onLogout() {
                this.$store.dispatch('logout');
                this.$router.push('/admin/auth');
            }
        },
        computed: {
            loadedPosts() {
                return this.$store.getters.loadedPosts
            }
        }
    }
</script>