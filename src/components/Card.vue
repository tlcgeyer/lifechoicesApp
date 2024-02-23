<template>
    <div class="container-fluid">
        <div class="card-header">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        components: 'CardView'
    }
</script>

<style scoped>

</style>