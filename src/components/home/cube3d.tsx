import { useState } from 'react';
import styles from './cube3d.module.css';

function CubeFace({ itemData, sizeNpos }: GalleryItemProps) {
  let url;
  if (itemData.userTokenType == 'giphy') {
    // giphy
    const data = itemData.userTokenId.giphyData as GiphyData;
    url = data.images.original.url;
  } else if (itemData.userTokenType == 'topshotToken') {
    // topshotToken
    const data = itemData.userTokenId.momentData as MomentData;
    url = data.assetData.play.assets.images[0].url;
  }
  
  

  return (
    <div className={styles.page}>
      <img src={url} style={{ objectFit: sizeNpos as ObjectFitType }}/>
    </div>
  );
}

function Cube3DGallery({data, duration, sizeNpos}: GalleryProps) {
  const positions = {
    front: 0,
    right: -90,
    back: 180,
    left: 90
  };

  const [page, setPage] = useState(0);

  const nextPage = () => {
    //
    console.log('next page');
  };

  const prevPage = () => {
    //
    console.log('prev page');
  };

  const animatePage = () => {
    //
    console.log('animate page');
  };

  const faces = data.map((item, index) => <CubeFace sizeNpos={sizeNpos} itemData={item} key={index} />);
  return <div className={styles.pages}>{faces}</div>;
}

export default Cube3DGallery;