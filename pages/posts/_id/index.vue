<template>
    <div class="post-page">
        <section class="post">
            <img :src="loadedPost.thumbnail" alt="Image for:" style="height: 90vh;">
            <div class="card">
                <div class="posted-at">Posted at {{ loadedPost.updatedDate }}</div>
                <div class="author">Written by {{ loadedPost.author }}</div>
                <div class="content-container">
                    <h2 class="title">{{ loadedPost.title }}</h2>
                    <p class="content">{{ loadedPost.content }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created() {},
        asyncData(context) {
            return axios.get(`https://nuxt-blog-19273.firebaseio.com/posts/${context.params.id}.json`)
                .then(response => {
                    return { 
                        loadedPost: response.data
                    }
                })
                .catch( error => {
                    context.error(error)
                });
        }
    }
</script>

<style scoped>
    .post {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        margin-top: 200px;
        padding: 10px;
        border-radius: 3px;
        background-color: #ddd;
        width: 400px;
    }
</style>
