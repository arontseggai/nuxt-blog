<template>
    <div class="admin-page container">
        <section class="new-post">
            <button @click="goToNewPostPage" class="btn">Create Post</button>
        </section>
        <section class="existing-posts">
            <h1>Existing posts</h1>
            <PostList isAdmin :posts="loadedPosts"/>
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
        data() {
            return {
                loadedPosts: [
                    {id: 1, title: "fwefwef", thumbnail: "http://blog.pakistani.pk/wp-content/uploads/2016/02/1..jpg", previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"},
                    {id: 2, title: "fwefwef", thumbnail: "http://blog.pakistani.pk/wp-content/uploads/2016/02/1..jpg", previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"},
                    {id: 3, title: "fwefwef", thumbnail: "http://blog.pakistani.pk/wp-content/uploads/2016/02/1..jpg", previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"},
                    {id: 4, title: "fwefwef", thumbnail: "http://blog.pakistani.pk/wp-content/uploads/2016/02/1..jpg", previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"}
                ]
            }
        },        
        methods: {
            goToNewPostPage () {
                console.log('wefwefewfewf');
                this.$router.push('admin/new-post')
            }
        }
    }
</script>