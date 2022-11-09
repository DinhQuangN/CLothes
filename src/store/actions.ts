import { IMusic } from '@/utils/interface';
import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationTypes } from './mutations';
import { State } from './state';
import data from '@/assets/data'
export enum ActionTypes {
	GET_MUSIC_COUNT = 'GET_MUSIC_COUNT',
	GET_MUSIC_DATA = 'GET_MUSIC_DATA'
}
export const actions: ActionTree<State, State> & Actions = {
	[ActionTypes.GET_MUSIC_DATA]({commit}){
		let payload:IMusic[] = data;
		commit(MutationTypes.GET_MUSIC_DATA,payload)
	}
};
export interface Actions {
	[ActionTypes.GET_MUSIC_DATA]({commit}:AugmentedActionContext):void
}
type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;
