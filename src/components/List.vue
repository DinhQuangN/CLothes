<template>
	<div
		class="w-full absolute bottom-0 left-0 bg-white text-[#080710] rounded-[10px] z-10 list"
		v-if="handleOpen()"
	>
		<div class="w-full px-5 py-[15px] flex justify-between items-center">
			<div class="flex items-center gap-[5px]">
				<i class="material-symbols-outlined text-[1.7rem]">queue_music</i>
				<span class="text-[1.25rem] capitalize text-[#444]">Music List</span>
			</div>
			<i class="material-symbols-outlined" @click="handleClickOpen">close</i>
		</div>
		<ul class="w-full h-[250px] overflow-y-scroll">
			<li
				class="w-full py-[10px] px-[30px] flex justify-between cursor-pointer border-b border-[#eee] hover:bg-[palegoldenrod]"
				v-for="(item, index) in handleData()"
				:key="index"
				:class="{ playing: handleMusicNumber() === index }"
				@click="handleClickMusicNumber(index)"
			>
				<div>
					<span>{{ item.title }}</span>
					<p class="text-[#999] text-[0.85rem]">{{ item.artist }}</p>
				</div>
				<Duration :music="item" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Duration from '@/components/Duration.vue';
import { MutationTypes } from '@/store/mutations';
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
	name: 'List',
	components: {
		Duration
	},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	watch: {
		musicNumber() {
			this.$store.state.musicNumber;
			console.log(this.$store.state.musicNumber);
		}
	},
	methods: {
		handleData() {
			return this.$store.state.musicData;
		},
		handleMusicNumber() {
			return this.$store.state.musicNumber;
		},
		handleOpen() {
			return this.$store.state.open;
		},
		handleClickMusicNumber(id: number) {
			this.$store.commit(MutationTypes.SET_MUSIC_NUMBER, id);
			this.$store.commit(MutationTypes.SET_OPEN);
		},
		handleClickOpen() {
			this.$store.commit(MutationTypes.SET_OPEN);
		}
	}
});
</script>

<style></style>
