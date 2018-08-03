<template>
    <div class="col s12 m6 l4">
        <nuxt-link :to="postLink">
            <div class="card">
                    <div class="card-image">
                    <img :src="thumbnail">
                    <span class="card-title">{{ title }}</span>
                    </div>
                    <div class="card-content">
                    <p>{{ previewText }}</p>
                    </div>
                </div>
        </nuxt-link>
    </div>
</template>

<script>
    
    export default {
        props: {
            isAdmin: {
                type: Boolean,
                required: true
            },
            thumbnail: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            previewText: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }         
        },
        computed: {
            postLink() {
                return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`
            }
        }
    }
</script>