<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
    import AdminPostForm from '~/components/Admin/AdminPostForm'

    export default {
        components: {
            AdminPostForm
        },
        data() {
            return {
                loadedPost: {
                    author: 'Aron',
                    title: 'This is a test title',
                    thumbnailLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Fairview_Dome.jpg/1600px-Fairview_Dome.jpg',
                    content: 'wjfnkwjfnwkjfbjwhefb jhwebf jwbfjbfjwbfwjebfwejbfwejhwejfbhwefjbhwe'
                }
            }
        }
    }
</script>