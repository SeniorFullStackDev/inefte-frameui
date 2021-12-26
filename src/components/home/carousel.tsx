// import AccountInfo from 'components/accountinfo';

type ItemProps = {
  itemData: any
};

function CarouselItem({itemData}: ItemProps) {
  const type = itemData.userTokenType;
  
  if (type == 'giphy') { 
    const { giphyData } = itemData.userTokenId;
    const { user, images } = giphyData;
    
    return (
      <div>
        <img src={images.original.url}/>
        {/* <AccountInfo profile_url={user.profile_url} display_name={user.display_name} username={user.username} ntf_token=''/> */}
      </div>
    );
  } 
  // else if (type == 'erc1155UserTokens') {

  // } 
  // else if (type == 'erc721UserTokens') {

  // } 
  else if (type == 'topshotToken') {
    //
  } 
  // else if (type == 'opensea') {

  // }

  return <div></div>;
}

function CarouselGallery ({data} : GalleryProps) {
  const itemList = data.map((item) => <CarouselItem itemData={item} key={item._id} />);
  return (
    <div 
      // autoPlay 
      // showIndicators={false} 
      // dynamicHeight       
      // centerSlidePercentage={100}
      // centerMode
      // showArrows={false}
      // showStatus={false}
    >
        {itemList}
    </div>);
}

export default CarouselGallery;