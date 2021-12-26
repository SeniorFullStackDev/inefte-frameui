import styles from './glitch.module.css';

type Props = {
  data: any[]
};

function GlitchItem({ itemData }: { itemData: any }) {
  const type = itemData.userTokenType;
  
  if (type == 'giphy') { 
    const { giphyData } = itemData.userTokenId;
    const { user, images } = giphyData;
    
    return (
      <div>
        <img src={images.original.url}/>

      </div>
    );
  } 
  return <div></div>;
}

function GlitchGallery({data} : GalleryProps) {
  const listItem = data.map((item) => <GlitchItem itemData={item} key={item._id} />);
  return <div>{listItem}</div>
}

export default GlitchGallery;