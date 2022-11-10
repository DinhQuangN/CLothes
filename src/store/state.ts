import { IMusic } from '@/utils/interface';

export interface State {
	loading: boolean;
	open: boolean;
	musicNumber: number;
	musicData: IMusic[];
	play: boolean;
}
export const state: State = {
	loading: false,
	musicNumber: 0,
	open: false,
	musicData: [] as IMusic[],
	play: false
};
