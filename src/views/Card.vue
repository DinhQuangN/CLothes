<template>
	<div class="w-full p-6 overflow-hidden">
		<div class="w-full flex justify-between items-center">
			<i class="material-symbols-outlined">expand_more</i>
			<span
				>Now Playing {{ handleMusicNumber() + 1 + '/' + music.length }}</span
			>
			<i class="material-symbols-outlined" @click="handleOpen">queue_music</i>
		</div>
		<div class="w-full h-[270px] flex justify-center relative">
			<img
				:class="[
					'w-[200px] h-[200px] object-cover rounded-[50%] music_logo',
					play ? 'playing' : ' '
				]"
				:src="music[handleMusicNumber()].thumbnail"
				alt=""
			/>
		</div>
		<div class="w-full text-center">
			<p class="text-[1.2rem]">{{ music[handleMusicNumber()].title }}</p>
			<p class="text-[#bbb]">{{ music[handleMusicNumber()].artist }}</p>
		</div>
		<div class="mt-[15px]">
			<input
				class="w-full h-1"
				type="range"
				name=""
				id=""
				min="{0}"
				:max="duration"
				:value="currentTime"
				:onchange="handleChangeTime"
				:style="`background: linear-gradient(to right,#3264fe ${
					(currentTime / duration) * 100
				}%,#e5e5e5 ${(currentTime / duration) * 100}%);`"
			/>
		</div>
		<div class="w-full flex justify-between text-xs text-[#bbb]">
			<span>{{ handleCurrentTime() }}</span>
			<span>{{ handleTimer() }}</span>
		</div>
		<div class="w-full flex justify-between items-center mt-5 mb-6">
			<i class="material-symbols-outlined" @click="handleRepeat">{{
				repeat
			}}</i>
			<i
				class="material-symbols-outlined text-[2.5rem]"
				v-on:click="handleNextPrev(-1)"
				>skip_previous</i
			>
			<div
				class="rounded-[50%] w-[3.2rem] h-[3.2rem] flex justify-center items-center relative play"
			>
				<i
					class="material-symbols-outlined bg-white bg-clip-text absolute"
					@click="handlePlayingAudio()"
				>
					{{ play ? 'pause' : 'play_arrow' }}
				</i>
			</div>
			<i
				class="material-symbols-outlined text-[2.5rem]"
				@click="handleNextPrev(1)"
				>skip_next</i
			>
			<i
				class="material-symbols-outlined"
				v-on:click="
					() => {
						showVolume = !showVolume;
					}
				"
				>volume_up</i
			>
			<div
				:class="[
					'w-full h-[50px] bg-[#333] absolute bottom-[-10%] left-0 rounded-[10px] border border-[#555] flex items-center justify-between p-[25px] z-[5] volume gap-2',
					showVolume ? 'show' : ' '
				]"
			>
				<i
					class="material-symbols-outlined"
					@click="() => (volume > 0 ? (volume = 0) : (volume = 100))"
					>{{ volume === 0 ? 'volume_off' : 'volume_up' }}</i
				>
				<input
					class="w-full h-1"
					type="range"
					name=""
					id=""
					min="{0}"
					max="{100}"
					:value="volume"
					:onchange="handleVolume"
					:style="`background: linear-gradient(to right,#3264fe ${volume}%,#e5e5e5 ${volume}%);`"
				/>
				<span>{{ volume }}</span>
			</div>
		</div>
		<audio
			:src="music[handleMusicNumber()].src"
			hidden
			:onloadstart="handleLoadStart"
			ref="audioRef"
			:ontimeupdate="handleOnTime"
			:onended="handleEndedAudio"
		></audio>
	</div>
</template>
<script lang="ts">
import { MutationTypes } from '@/store/mutations';
import { timer } from '@/utils/timer';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
	name: 'Card',
	props: ['music'],
	data() {
		return {
			// musicNumber: 1 as number,
			duration: 1 as number,
			currentTime: 0 as number,
			play: false as boolean,
			showVolume: false as boolean,
			volume: 50 as number,
			repeat: 'repeat' as string
		};
	},
	components: {},
	created() {},
	mounted() {
		this.handleSettingVolume();
	},
	methods: {
		handleMusicNumber() {
			return this.$store.state.musicNumber;
		},
		handleOpen() {
			if (!this.$store.state.open) {
				this.$store.commit(MutationTypes.SET_OPEN);
			}
		},
		handleLoadStart(e: Event) {
			const { src } = e.target as HTMLAudioElement;
			const audio = new Audio(src);
			audio.onloadedmetadata = () => {
				this.duration = audio.duration;
			};
			if (this.play) {
				const x = this.$refs.audioRef as HTMLAudioElement;
				x.play();
			}
		},
		handleTimer() {
			return timer(this.duration);
		},
		handleCurrentTime() {
			return timer(this.currentTime);
		},
		handlePlayingAudio() {
			const x = this.$refs.audioRef as HTMLAudioElement;
			if (this.play) {
				x.pause();
				this.$store.commit(MutationTypes.SET_PLAY);
				this.play = this.$store.state.play;
			} else {
				x.play();
				this.$store.commit(MutationTypes.SET_PLAY);
				this.play = this.$store.state.play;
			}
		},
		handleOnTime() {
			const x = this.$refs.audioRef as HTMLAudioElement;
			const currentTime: number = x.currentTime;
			this.currentTime = currentTime;
			return timer(this.currentTime);
		},
		handleChangeTime(e: Event) {
			const x = this.$refs.audioRef as HTMLAudioElement;
			const { value } = e.target as HTMLInputElement;
			x.currentTime = Number(value);
			this.currentTime = x.currentTime;
		},
		handleNextPrev(n: number) {
			this.$store.commit(
				MutationTypes.SET_MUSIC_NUMBER,
				this.$store.state.musicNumber + n
			);
			let x = this.$store.state.musicNumber;
			if (n > 0) {
				return x > this.$store.state.musicData.length - 1
					? this.$store.commit(
							MutationTypes.SET_MUSIC_NUMBER,
							this.$store.state.musicNumber * 0
					  )
					: x;
			}
			return x < 0
				? this.$store.commit(
						MutationTypes.SET_MUSIC_NUMBER,
						this.$store.state.musicData.length - 1
				  )
				: x;
		},
		handleVolume(e: Event) {
			const { value } = e.target as HTMLInputElement;
			this.volume = Number(value);
		},
		handleSettingVolume() {
			const x = this.$refs.audioRef as HTMLAudioElement;
			x.volume = this.volume / 100;
		},
		handleRepeat() {
			switch (this.repeat) {
				case 'repeat':
					return (this.repeat = 'repeat_one');
				case 'repeat_one':
					return (this.repeat = 'shuffle');
				default:
					return (this.repeat = 'repeat');
			}
		},
		handleEndedAudio() {
			const x = this.$refs.audioRef as HTMLAudioElement;
			switch (this.repeat) {
				case 'repeat_one':
					return x.play();
				case 'shuffle':
					return this.handleShuffle();
				default:
					return this.handleNextPrev(1);
			}
		},
		handleShuffle() {
			const num = this.randomNumber();
			console.log('handleShuffle', num);
			return this.$store.commit(MutationTypes.SET_MUSIC_NUMBER, num);
		},
		randomNumber(): number {
			const number = Math.floor(
				Math.random() * (this.$store.state.musicData.length - 1)
			);
			if (number === this.$store.state.musicNumber) {
				return this.randomNumber();
			}
			return number;
		}
	},
	watch: {
		volume() {
			this.handleSettingVolume();
		}
	}
});
</script>
