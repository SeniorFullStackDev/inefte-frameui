import { get } from './request';

export const getPlaylist = () => get({ url: '/playlist/getPlaylist' });

export const getUserCollection = (skip: number, limit: number) => get({url: '/getUserCollection', params: { skip, limit }});

export const getPlaylistTokens = () => get({ url: '/playlist/getPlaylistTokens' });