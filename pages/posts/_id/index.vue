<template>
    <div class="post-page">
        <section class="post">
            <div class="card">
                <div class="posted-at">XXXXXX</div>
                <div class="author">False McName</div>
                <div class="content">
                    <h2 class="title">This is the title [{{ $route.params.id }}]</h2>
                    <p class="content">This is the content of the post</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

    .post {
        display: flex;
        justify-content: center;
    }

    .card {
        margin-top: 200px;
        padding: 10px;
        border-radius: 3px;
        background-color: #ddd;
        width: 400px;
    }
</style>
