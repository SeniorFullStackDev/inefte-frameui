import styles from './cube3d.module.css';

function CubeFace({ itemData, sizeNpos }: { itemData: GalleryItemData, sizeNpos: string }) {
  
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
    <div className={styles.face}>
      <img src={url} />
    </div>
  );
}

function Cube3DGallery({data, duration, sizeNpos}: GalleryProps) {
  const faces = data.map((item) => <CubeFace sizeNpos={sizeNpos} itemData={item} key={item._id} />);
  return <div className={styles.cube}>{faces}</div>;
}

export default Cube3DGallery;