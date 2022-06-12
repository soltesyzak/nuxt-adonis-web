<template>
    <nuxt-link :to="'assets/' + id">
        <div class="card my-4">
            <img class="card-img-top" width="350px" src="../static/1528397457-4687.jpeg" alt="Card image cap">
            <div class="card-body">
                <h6 class="card-title">{{ city }}</h6>
                <p class="card-text">{{ value }} CZK</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{ area }} m2</small>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: 'Asset',
    props: ['description', 'id', 'city', 'area', 'value']
}
</script>

<style>
    .card {
        color: #212529;
    }
    .card:hover {
        text-decoration: none;
    }
</style>