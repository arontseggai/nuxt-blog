<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm @submit="onSubmitted" :post="loadedPost" />
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    import AdminPostForm from '~/components/Admin/AdminPostForm'

    export default {
        components: {
            AdminPostForm
        },
        middleware: ['check-auth','auth'],
        asyncData(context) {
            return axios.get(`https://nuxt-blog-19273.firebaseio.com/posts/${context.params.postId}.json`)
                .then(response => {
                    return {
                        loadedPost: { ...response.data, id: context.params.postId}
                    }
                })
                .catch(error => {
                    context.error(error)
                })
        },
        methods: {
            onSubmitted(editedPost) {
                this.$store.dispatch('editPost', { ...editedPost, updatedDate: new Date() })
                    .then(() => {
                        this.$router.push('/admin')
                    })
            }
        }
    }
</script>