<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="result in results" :key="result.id">
                <Asset    
                    :id="result.id" 
                    :description="result.description" 
                    :area="result.area"
                    :value="result.value"
                    :city="result.city"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Asset from '../../components/Asset.vue';
export default {
    components: {
        Asset
    },
    head() {
        tite: "titulok"
    },
    data() {
        return {
            results: []
        }   
    },

    async created() {
        const data = await this.$axios.$get('/api/assets');
        this.results = data;
        console.log(this.results)
    }
}

</script>