import styles from './style.module.css';
import QRCode from 'qrcode.react';
import { ReactComponent as CheckSVG } from 'assets/check.svg';
import { ReactComponent as SettingIcon} from 'assets/setting.svg';

type Props = {
  itemData: GalleryItemData,
  onClickSettingButton?: VoidFunction,
};

const AccountInfo = ({ itemData, onClickSettingButton }: Props) => {
  let profile_url;
  let display_name;
  let username;
  let nft_token;
  let is_verified;

  if (itemData.userTokenType == 'giphy') {    
    const giphyData = itemData.userTokenId.giphyData;
    profile_url = giphyData?.user?.profile_url;
    display_name = giphyData?.user?.display_name;
    username = giphyData?.user?.username;
    is_verified = giphyData?.user?.is_verified;
  }

  return (
    <div className={styles.userinfo}>
      {profile_url && <QRCode value={profile_url} size={111} />}
      <div className={styles.body}>
        <div className={styles.displayName}>{display_name}</div>        
        <div className={styles.grow}>
          <div className={styles.username}>{username}</div>
          { is_verified && <span className={styles.badge}><CheckSVG />Verified Owner</span>}
          { nft_token && <div className={styles.ntf_token}>{nft_token}</div> }
        </div>        
        <div onClick={onClickSettingButton} className={styles.settingBtn}><SettingIcon /></div>
      </div>
    </div>
  );
}

export default AccountInfo;