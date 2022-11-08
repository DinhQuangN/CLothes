import {
	CommitOptions,
	createStore,
	DispatchOptions,
	Store as VuexStore
} from 'vuex';
import { Actions, actions } from './actions';
import { Mutations, mutations } from './mutations';
import { State, state } from './state';

export default createStore({
	state,
	getters: {},
	mutations,
	actions,
	modules: {}
});
export type Store = Omit<
	VuexStore<State>,
	'getters' | 'commit' | 'dispatch'
> & {
	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
		key: K,
		payload: P,
		options?: CommitOptions
	): ReturnType<Mutations[K]>;
} & {
	dispatch<K extends keyof Actions>(
		key: K,
		payload: Parameters<Actions[K]>[1],
		options?: DispatchOptions
	): ReturnType<Actions[K]>;
};
// } & {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>
//   }
// }
