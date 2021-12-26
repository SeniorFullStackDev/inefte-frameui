import styles from './style.module.css';
import QRCode from 'qrcode.react';
import { ReactComponent as CheckSVG } from 'assets/check.svg';
import { ReactComponent as SettingIcon} from 'assets/setting.svg';

type Props = {
  profile_url: string,
  display_name: string,
  username: string,
  ntf_token: string
};

const AccountInfo = ({profile_url, display_name, username, ntf_token}: Props) => {  

  return (
    <div className={styles.miniWrapper}>
      <QRCode value={profile_url} size={100} />
      <div className={styles.body}>
        <h3>{display_name}</h3>
        <p>{username}</p>
        <span className={styles.badge}><CheckSVG /> Verified Owner</span>
        <p>{ntf_token}</p>
      </div>
      <div className={styles.buttons}>
        <a><SettingIcon /></a>
      </div>
    </div>
  );
}

export default AccountInfo;