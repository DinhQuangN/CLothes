import { IMusic } from '@/utils/interface';
import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationTypes {
	SET_MUSIC_NUMBER = 'SET_MUSIC_NUMBER',
	GET_MUSIC_DATA = 'GET_MUSIC_DATA',
	SET_OPEN = 'SET_OPEN'
}
export type Mutations<S = State> = {
	[MutationTypes.SET_MUSIC_NUMBER](state: S, payload: number): void;
	[MutationTypes.GET_MUSIC_DATA](state:S,payload:IMusic[]):void;
	[MutationTypes.SET_OPEN](state:S,payload:boolean):void;
};
export const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.SET_MUSIC_NUMBER](state, payload) {
		state.musicNumber = payload;
	},
	[MutationTypes.GET_MUSIC_DATA](state,payload){

		payload.forEach(item=>state.musicData.push(item))
	},
	[MutationTypes.SET_OPEN](state,payload){
		state.open = !state.open
	}
};
