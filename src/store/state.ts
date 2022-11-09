import { IMusic } from "@/utils/interface";

export interface State {
	loading: boolean;
	musicNumber: number;
	musicData:IMusic[]
}
export const state: State = {
	loading: false,
	musicNumber: 0,
	musicData:[] as IMusic[]
};
