import { createSlice } from '@reduxjs/toolkit';
import { AnyArray } from 'immer/dist/internal';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'store';

const initialState = {
  name: '',
  assets: []
};

const playlistSlicer = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    }
  }
});

export default playlistSlicer.reducer;

export function usePlaylist() {
  const dispatch = useDispatch();

  const playlistActions = playlistSlicer.actions;

  const playlist = useSelector((state: RootState) => state.playlist);

  const setName = useCallback((payload: string) => {
    dispatch(playlistActions.setName(payload));
  }, [dispatch]);

  const setAssets = useCallback((payload: AnyArray) => {
    dispatch(playlistActions.setAssets(payload));
  }, [dispatch]);

  return { playlist, setName, setAssets };
}