type Account = {
  is_verified: boolean,
  website_url: string,
  instagram_url: string,
  description: string,
  display_name: string,
  username: string,
  profile_url: string,
  banner_url: string,
  banner_image: string,
  avatar_url: string
};

type GiphyImageInfo = {
  url?: string,
  size?: string,
  width?: string,
  height?: string,
  mp4?: string,
  mp4_size?: string,
  webp?: string,
  webp_size?: string,
  hash?: string,
  frames?: string,  
};

type GiphyImage = {
  original: GiphyImageInfo
};

type GiphyData = {
  user?: Account,
  images: GiphyImage,
  title: string,
  username: string,  
  is_sticker?: number,
  source_post_url?: string,
  source_tld?: string,
  content_url?: string,
  rating?: string,  
  source?: string,  
  bitly_url?: string,
  bitly_gif_url?: string,  
  url?: string,  
  type?: string,
};

type MomentInfo = {
  AwayTeawmScore: string,
  HomeTeamScore: string,
  AwayTeamName: string,
  PlayType: string,
  PlayCategory: string,
  DateOfMoment: string,
  NbaSeason: string,
  TotoalYearsExperience: string,
  Weight: string,
  Height: string,
  PlayerPosition: string,
  PrimaryPosition: string,
  TeamAtMoment: string,
  TeamAtMomentNBAID: string,
  DraftRound: string,
  DraftSelection: string,
  DraftYear: string,
  DraftTeawm: string,
  JerseyNumber: string,
  Birthdate: string,
  Birthplace: string,
  LastName: string,
  FirstName: string,
  FullName: string,
};

type MomentImage = {
  url: string,
  type: string,
};

type MomentVideo = {
  videoLength: number,
  url: string,
  type: string,
};

type MomentAssetData = {
  assetPathPrefix: string,
  price?: string,
  flowSerialNumber: string,
  flowId: string,
  play: {
    assets: {
      images: MomentImage[],
      videoLengthInMiliseconds?: number,
      videos: MomentVideo[]
    },
    flowID?: string,
    description?: string,    
  },
  set: {
    assetPath: string,
    flowName: string,    
  }
};

type MomentData = {
  assetData: MomentAssetData,
  moment: MomentInfo
};

type GalleryItemData = {
  _id: string,
  userTokenId: {
    giphyData?:  GiphyData,
    giphyId?: string,
    momentData?: MomentData,
    momentId?: string
  },
  userTokenType: 'giphy' | 'topshotToken'
};

type ObjectFitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

type GalleryItemProps = {
  itemData: GalleryItemData, 
  sizeNpos: string,
};

type GalleryProps = {
  data: GalleryData[],
  duration: number,
  sizeNpos: string,
};