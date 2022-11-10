<template>
	<span class="text-[0.9rem]">
		{{ handleConvert() }}
	</span>
</template>

<script lang="ts">
import { timer } from '@/utils/timer';
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
	name: 'Duration',
	props: ['music'],
	components: {},
	data() {
		return {
			dura: 0 as number
		};
	},
	methods: {
		handleDuration() {
			const audio = new Audio(this.music.src);
			audio.onloadedmetadata = () => {
				if (audio.readyState > 0) {
					if (audio.duration) {
						this.dura = audio.duration;
					}
				}
			};
		},
		handleConvert() {
			return timer(this.dura);
		}
	},
	mounted() {
		console.log('mounted');
	},
	created() {
		console.log('create');
		this.handleDuration();
	},
	watch: {}
});
</script>

<style></style>
