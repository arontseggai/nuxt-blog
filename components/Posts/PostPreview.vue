<template>
    <div class="col s12 m6 l4">
        <nuxt-link :to="postLink">
            <div class="card">
                    <div class="card-image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Fairview_Dome.jpg/1600px-Fairview_Dome.jpg">
                    <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
        </nuxt-link>
    </div>
</template>

<script>
    
    export default {
        props: {
            post: {
                type: Object,
                required: true
            },
            isAdmin: {
                type: Boolean,
                required: true
            }            
        },
        computed: {
            postLink() {
                return this.isAdmin ? `/admin/${this.post.id}` : `/posts/${this.post.id}`
            }
        }
    }
</script>