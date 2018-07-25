<template>
    <div class="admin-new-post-page container">
        <section class="new-post-form">
            <form>
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="title" type="text" class="validate">
                        <label for="first_name">Title</label>
                    </div>
                    <div class="input-field col s12">
                        <textarea id="content" class="materialize-textarea"></textarea>
                        <label for="content">Content</label>
                    </div>                                                                 
                </div>
            </form>            
        </section>
    </div>
</template>

<style scoped>
    .admin-new-post-page {
        padding: 20px;
    }
</style>
