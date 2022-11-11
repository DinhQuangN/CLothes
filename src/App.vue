<template>
	<div class="container w-[360px] rounded-[15px] relative">
		<div class="w-[150px] h-[150px] absolute rounded-[50%] shape-1"></div>
		<div class="w-[150px] h-[150px] absolute rounded-[50%] shape-2"></div>
		<div class="w-[150px] h-[150px] absolute rounded-[50%] shape-3"></div>
		<main
			class="w-[360px] rounded-[15px] border border-border1px shadow-border20px overflow-hidden relative backdrop-blur-[3px]"
		>
			<CardVue :music="getData()" />
			<ListVue />
		</main>
	</div>
</template>
<script lang="ts">
import ListVue from '@/components/List.vue';
import { ActionTypes } from '@/store/actions';
import CardVue from '@/views/Card.vue';
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
	name: 'App',
	components: {
		CardVue,
		ListVue
	},
	methods: {
		handleData() {
			return this.$store.dispatch(ActionTypes.GET_MUSIC_DATA);
		},
		getData() {
			return this.$store.state.musicData;
		}
	},
	created() {
		this.handleData();
	}
});
</script>
<style lang=""></style>
