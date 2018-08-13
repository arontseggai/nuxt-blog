<template>
    <div class="admin-new-post-page container">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted" />
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
        methods: {
            onSubmitted(postData) {
                this.$store.dispatch('addPost', postData)
                    .then(() => {
                        this.$router.push('/admin')
                    })
            }
        }
    }
</script>