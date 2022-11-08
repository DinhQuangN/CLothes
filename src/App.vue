<template>
	<div class="container">
		<main>
			<CardVue />
		</main>
	</div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { mapState } from 'vuex';
import CardVue from './views/Card.vue';
export default defineComponent({
	name:'App',
	components:{
		CardVue
	},
	methods:{
		getMusic(){
			this.$store.commit()
		}
	}
})
</script>
<style lang=""></style>
