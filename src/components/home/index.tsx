import { getFrameSetting, getUserCollection } from 'api';
import { setAuthToken } from 'api/request';
import { AuthContext } from 'auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFrameSetting } from 'reducers/framesetting';
import { usePlaylist } from 'reducers/playlist';
import CarouselGallery from './carousel';
import Cube3DGallery from './cube3d';
import TelevisionGallery from './tv';
import GlitchGallery from './glitch';
import styles from './style.module.css';

function Home() {
  const navigate = useNavigate();  
  const { token, resetFrame } = useContext(AuthContext);  
  const { frameSetting, setFrameSetting } = useFrameSetting();
  const { playlist, setAssets } = usePlaylist(); 
  
  const loadFrameSetting = async () => {
    const { success, errorMessage, data } = await getFrameSetting();
    if (success) {
      // const newSetting = {
      //   frameId: data.frameId,
      //   sizeAndpos: data.SizeAndPosition,
      //   playDuration: data.playDuration,
      //   transition: data.transition,
      //   background: data.background
      // };      
      // setFrameSetting(newSetting);
    } else {      
      resetFrame(() => {
        navigate('/auth');
      });
    }
  };

  const loadCollectionData = async () => {
    const { success, data } = await getUserCollection(0, 10);
    if (success) {      
      setAssets(data);
    }
  };

  useEffect(() => {
    if (token) setAuthToken(token);
    (async () => {
      await loadFrameSetting();
      await loadCollectionData();
    })();
  }, []);

  return (
    <div className={styles.wrapper} style={{ background: frameSetting.background }}>
      { frameSetting.transition == '3dcubes' ? <Cube3DGallery sizeNpos={frameSetting.sizeAndpos!} duration={frameSetting.playDuration!} data={playlist.assets} /> : 
        frameSetting.transition == 'glitch' ? <GlitchGallery sizeNpos={frameSetting.sizeAndpos!} duration={frameSetting.playDuration!}  data={playlist.assets} /> :
        frameSetting.transition == 'television' ? <TelevisionGallery sizeNpos={frameSetting.sizeAndpos!} duration={frameSetting.playDuration!}  data={playlist.assets} /> :
        <CarouselGallery sizeNpos={frameSetting.sizeAndpos!} duration={frameSetting.playDuration!} data={playlist.assets}/>
      }
    </div>
  );
}

export default Home;