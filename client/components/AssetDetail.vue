<template>
    <div class="asset-detail">
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6">
                    <img src="../static/1528397457-4687.jpeg" width="100%" class="rounded mx-auto d-block" alt="...">
                </div>
                <div class="col-md-6">
                    <h2>{{ description }}</h2>
                    <h6>{{ value }}</h6>
                    <p>{{ area }} m2</p>
                    <p>{{ type }}</p>
                    <p>{{ numberOfRooms }} rooms</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssetDetail',
    props: ['description', 'value', 'area', 'type', 'numberOfRooms', 'id']
}
</script>

<style>

</style>