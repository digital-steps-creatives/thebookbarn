<template>
	<div class="bg-white py-10">
		<div class="container mx-auto">
			<section-header>
				<template #title>
					Merchandise you have been waiting for!
				</template>
				<template #subtitle>
					Hurry while the stock lasts!
				</template>
			</section-header>
			<div class="grid xs:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
				<product-card v-for="(product, index) in products" :key="index" :product="product" class="product-default"></product-card>
			</div>
		</div>
	</div>
</template>

<script>
    import ProductCard from '../shared/ProductCard.vue';
    import SectionHeader from '../shared/SectionHeader.vue';
export default {
	props:['products'],
    components:{
        ProductCard, SectionHeader
    }
};
</script>

<style lang="scss" scoped>
</style>
