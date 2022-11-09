<template>
	<div class="w-full p-6 overflow-hidden" >
		<div class="w-full flex justify-between items-center" >
			<i class="material-symbols-outlined">expand_more</i>
			<span>Now Playing 1/9</span>
			<i class="material-symbols-outlined">queue_music</i>
		</div>
		<div class="w-full h-[270px] flex justify-center relative" >
			<img class="w-[200px] h-[200px] object-cover rounded-[50%]" src="@/assets/images/img01.jpg" alt="">
		</div>
		<div class="w-full text-center" >
			<p class="text-[1.2rem]" >abc</p>
			<p class="text-[#bbb]">abc</p>
		</div>
		<div class="mt-[15px]">
			<input class="w-full h-1" type="range" name="" id="" min={0} max={100}>
		</div>
		<div class="w-full flex justify-between text-xs text-[#bbb]">
			<span>00:00</span>
			<span>03:00</span>
		</div>
		<div class="w-full flex justify-between items-center mt-5 mb-6">
			<i class="material-symbols-outlined">repeat</i>
			<i class="material-symbols-outlined text-[2.5rem]">skip_previous</i>
			<div class="rounded-[50%] w-[3.2rem] h-[3.2rem] flex justify-center items-center relative play" >
				<i class="material-symbols-outlined bg-white bg-clip-text absolute">
					play_arrow
				</i>
			</div>
			<i class="material-symbols-outlined text-[2.5rem]">skip_next</i>
			<i class="material-symbols-outlined">volume_up</i>
			<div class="w-full h-[50px] bg-[#333] absolute bottom-[-10%] left-0 rounded-[10px] border border-[#555] flex items-center justify-between p-[25px] z-[5] volume">
				<i class="material-symbols-outlined">volume_up</i>
				<input class="w-full h-1" type="range" name="" id="" min={0} max={100}>
				<span>50</span>
			</div>
		</div>
		<audio src="@/assets/musics/As You Were - TrackTribe.mp3" hidden></audio>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: 'Card',
	props:['musicNumber'],
	components: {}
});
</script>
