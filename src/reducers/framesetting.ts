import { createSlice } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

type FrameSettingType = {
  frameId?: string,
  transition?: 'glitch' | 'television' | '3dcubes',
  sizeAndpos?: 'cover' | 'contain' | 'none',
  background?: string,
  playDuration? : number
};

const initialState: FrameSettingType = {
  // transition: '3dcubes',
  sizeAndpos: 'cover',
  background: 'black',
  playDuration: 10
};

const slicer = createSlice({
  name: 'framesetting',
  initialState,
  reducers: {
    setFrameSetting: (state: any, action) => {      
      return { ...state, ...action.payload };
    }
  }
});

export default slicer.reducer;

export function useFrameSetting() {
  const dispatch = useDispatch();

  const frameSettingActions = slicer.actions;
  
  const frameSetting = useSelector((state: RootState) => state.framesetting);

  const setFrameSetting = useCallback((payload: FrameSettingType) => {    
    dispatch(frameSettingActions.setFrameSetting(payload));
  }, [dispatch]);

  return { frameSetting, setFrameSetting };
}
