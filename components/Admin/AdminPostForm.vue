<template>
    <form @submit.prevent="onSave">
        <div class="row">
            <AppControlInput uid="author_name" v-model="editedPost.author">Author Name</AppControlInput>
            <AppControlInput v-model="editedPost.title">Title</AppControlInput>
            <AppControlInput v-model="editedPost.thumbnail">Thumbnail Url</AppControlInput>
            <AppControlInput v-model="editedPost.previewText">Preview  Text</AppControlInput>
            <AppControlInput
                control-type="textarea"
                v-model="editedPost.content">Content
            </AppControlInput>
            <AppButton type="submit">Save</AppButton>
            <AppButton
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onCancel">Cancel
            </AppButton>
        </div>
    </form>            
</template>

<style scoped>
    .admin-new-post-page {
        padding: 20px;
    }
</style>

<script>
    import AppButton from '~/components/UI/AppButton'
    import AppControlInput from '~/components/UI/AppControlInput'
    
    export default {
        components: {
            AppButton,
            AppControlInput
        },
        props: {
            post: {
                type: Object,
                required: false,

            }
        },
        data()   {
            return {
                editedPost: this.post ? { ...this.post } : {
                    author: '',
                    title: '',
                    thumbnail: '',
                    previewText: '',
                    content: ''
                }
            }
        },
        methods: {
            onCancel() {
                this.$router.push('/admin')
            },
            onSave() {
                console.log(this.editedPost)
                this.$emit('submit', this.editedPost)
            }
        }
    }
</script>