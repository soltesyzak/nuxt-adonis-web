<template>
    <div class="container">
        <nuxt-link to="/assets"><button type="button" class="btn btn-dark">Back</button></nuxt-link>
        <AssetDetail
            :key="asset.id"
            :description="asset.description"
            :area="asset.area"
            :type="asset.type"
            :numberOfRooms="asset.number_of_rooms"
            :value="asset.value"
        />
    </div>
</template>

<script>
import AssetDetail from '../../../components/AssetDetail.vue';
export default {
    components: { AssetDetail },

    data() {
        return {
            asset: {}
        }
    },
    async created() {
        try {
            const res = await this.$axios.$get(`/api/assets/${this.$route.params.id}`);
            this.asset = res;
        } catch(err) {
            console.error(e);
        }
    }
}
</script>

<style>

</style>