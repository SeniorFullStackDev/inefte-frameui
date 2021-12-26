import { get, post } from './request';

export const generateFrameCode = () => get({url: '/frames/generateFrameCode'});

export const getTokenFromCode = (code: string) => post({
	url: '/frames/getTokenFromCode', 
	data: { code }
});

export const getFrameSetting = () => get({
	url: '/frames/setting'
});

