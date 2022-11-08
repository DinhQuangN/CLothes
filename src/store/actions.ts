import { ActionContext, ActionTree } from 'vuex';
import { Mutations } from './mutations';
import { State } from './state';

export enum ActionTypes {
	GET_MUSIC_COUNT = 'GET_MUSIC_COUNT'
}
export const actions: ActionTree<State, State> & Actions = {};
export interface Actions {}
type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;
