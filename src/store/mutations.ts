import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationTypes {
	SET_MUSIC_NUMBER = 'SET_MUSIC_NUMBER'
}
export type Mutations<S = State> = {
	[MutationTypes.SET_MUSIC_NUMBER](state: S, payload: number): void;
};
export const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.SET_MUSIC_NUMBER](state, payload) {
		state.musicNumber += payload;
	}
};
