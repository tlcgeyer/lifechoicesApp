<template>
    <div class="container">
        <div class="row">
            <div class="row" v-if="products">
                <Card v-for="product in products" :key="product.prodID">
                    <template #cardHeader>
                        <h4>{{product.prodName}}</h4>
            </div>        
        </div>
    </div>
</template>

<script>
    export default {
      components: {
          CardComp
      },
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>

</style>
