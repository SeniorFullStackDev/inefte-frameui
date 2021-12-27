function GalleryItem({itemData, sizeNpos}: GalleryItemProps) {
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

  return <img src={url} style={{ objectFit: sizeNpos as ObjectFitType }}/>;
}

export default GalleryItem;