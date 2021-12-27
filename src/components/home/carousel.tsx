import SystemBar from 'components/systembar';
import { useEffect, useState } from 'react';
import AccountInfo from './accountinfo';
// import { useSwipeable } from 'react-swipeable';
import styles from './carousel.module.css';
import GalleryItem from './GalleryItem';

function CarouselGallery ({data, duration, sizeNpos} : GalleryProps) {  
  const [currentPosition, setCurrentPosition] = useState(0);
  const [toggleSystembar, setToggleSystembar] = useState(false);

  const nextPage = () => {
    const lastPosition = data.length - 1;
    const nextPosition = currentPosition == lastPosition ? 0 : currentPosition + 1;
    setCurrentPosition(nextPosition);
  };

  const prevPage = () => {
    const lastPosition = data.length - 1;
    const nextPosition = currentPosition == 0 ? lastPosition : currentPosition - 1;
    setCurrentPosition(nextPosition);
  };

  const onItemClick = () => {
    // nextPage();
  };

  const onToggleSystemBar = () => {
    setToggleSystembar(!toggleSystembar);
  };

  useEffect(() => {
    const timeout = setTimeout(nextPage, duration * 1000);
    return () => clearTimeout(timeout);
  }, [currentPosition]);

  return (
    <div className={styles.pages}>
      {
        data.map((value, index) => (
          <div onClick={onItemClick} className={index == currentPosition ? `${styles.page} ${styles.active}`: `${styles.page}`} key={index}>
            {index == currentPosition && <GalleryItem itemData={value} sizeNpos={sizeNpos} />}
          </div>
        ))
      }
      <div className={styles.footer}>
        {data.length > 1 && <AccountInfo itemData={data[currentPosition]} onClickSettingButton={onToggleSystemBar}/>}
        {toggleSystembar && <SystemBar />}
      </div>
    </div>);
}

export default CarouselGallery;